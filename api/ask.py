import json
import os
from pathlib import Path

import numpy as np
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from google import genai

load_dotenv(Path(__file__).resolve().parent.parent / ".env")

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

VECTOR_FILE = Path(__file__).resolve().parent / "vectors.json"
vectors = json.loads(VECTOR_FILE.read_text(encoding="utf-8"))

EMB = np.array([v["embedding"] for v in vectors], dtype=np.float32)
NORMS = np.linalg.norm(EMB, axis=1, keepdims=True)
NORMS[NORMS == 0] = 1.0
NORM = EMB / NORMS

app = Flask(__name__)

ANSWER_PROMPT = """\
You are the AI answer engine for an Adaptive Knowledge
Lifecycle Management (AKLM) system. Answer the user's
question using ONLY the retrieved website information
provided below.

USER QUESTION:
{question}

RETRIEVED WEBSITE INFORMATION:
{context}

ANSWERING RULES:
1. USE ONLY RETRIEVED INFORMATION. Do not use outside
knowledge. Do not invent facts.
2. If the answer is explicitly stated, answer directly.
3. You may count items from retrieved lists.
4. You may make reasonable inferences but clearly
distinguish them from explicit facts. Do NOT over-infer.
5. You may perform simple calculations. Be careful with
"+" values.
6. If the retrieved information is insufficient, say:
"I couldn't find that information on the website."
7. Be concise. Do not explain the RAG process. Do not
mention embeddings, vector databases, similarity scores,
or internal implementation details.
"""


def embed_query(question):
    resp = client.models.embed_content(
        model="gemini-embedding-001",
        contents=[question],
    )
    arr = np.array(resp.embeddings[0].values, dtype=np.float32)
    return arr / max(float(np.linalg.norm(arr)), 1e-12)


def retrieve(question, top_k=5):
    q = embed_query(question)
    scores = NORM @ q
    order = np.argsort(scores)[::-1][:top_k]
    return [
        {
            "chunk_id": vectors[int(i)]["id"],
            "text": vectors[int(i)]["text"],
            "source_url": vectors[int(i)]["source_url"],
            "score": float(scores[int(i)]),
        }
        for i in order
    ]


def build_context(results):
    parts = []
    for i, r in enumerate(results, start=1):
        parts.append(
            f"--- Retrieved Source {i} ---\n"
            f"Chunk ID: {r['chunk_id']}\n"
            f"Similarity score: {r['score']:.4f}\n"
            f"Source URL: {r['source_url']}\n"
            f"Website content:\n{r['text']}\n"
            f"--- End Source {i} ---"
        )
    return "\n".join(parts)


def generate_answer(question, results):
    context = build_context(results)
    prompt = ANSWER_PROMPT.format(question=question, context=context)
    resp = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
    )
    return (getattr(resp, "text", "") or "").strip()


@app.route("/api/health")
def health():
    return jsonify(
        {
            "status": "ok",
            "chunks": len(vectors),
            "embedder": "gemini-embedding-001",
            "answerer": "gemini-3.6-flash",
            "dim": len(vectors[0]["embedding"]),
        }
    )


@app.route("/api/ask", methods=["POST"])
def ask():
    body = request.get_json(silent=True) or {}
    question = (body.get("question") or "").strip()

    if not question:
        return jsonify(
            {"answer": "Please ask a question about ADCET.", "sources": []}
        )

    results = retrieve(question)
    answer = generate_answer(question, results)

    sources = [
        {"chunk_id": r["chunk_id"], "source_url": r["source_url"], "score": r["score"]}
        for r in results
    ]

    return jsonify({"answer": answer, "sources": sources})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int(os.getenv("PORT", "8000")), debug=False)