import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vectors = JSON.parse(
  readFileSync(path.join(__dirname, "vectors.json"), "utf-8")
);

const EMBED_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=";

// Primary first; automatic fallback when the primary is unavailable (Google outages).
const GEN_MODELS = ["gemini-3.6-flash", "gemini-3.5-flash-lite"];
const GEN_TIMEOUT_MS = 20000;

const ANSWER_PROMPT = `You are the AI answer engine for an Adaptive Knowledge
Lifecycle Management (AKLM) system. Answer the user's question using ONLY the
retrieved website information provided below.

USER QUESTION:
{question}

RETRIEVED WEBSITE INFORMATION:
{context}

ANSWERING RULES:
1. USE ONLY RETRIEVED INFORMATION. Do not use outside knowledge. Do not invent facts.
2. If the answer is explicitly stated, answer directly.
3. You may count items from retrieved lists.
4. You may make reasonable inferences but clearly distinguish them from explicit facts. Do NOT over-infer.
5. You may perform simple calculations. Be careful with "+" values.
6. If the retrieved information is insufficient, say: "I couldn't find that information on the website."
7. Be concise. Do not explain the RAG process. Do not mention embeddings, vector databases, similarity scores, or internal implementation details.`;

function dot(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}

function norm(a) {
  return Math.sqrt(dot(a, a));
}

async function postJSON(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}`);
  return res.json();
}

async function generateWithFallback(apiKey, prompt) {
  let lastError = new Error("no model attempted");
  for (const model of GEN_MODELS) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), GEN_TIMEOUT_MS);
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
          signal: controller.signal,
        }
      );
      clearTimeout(timer);
      if (!res.ok) {
        lastError = new Error(`${model} HTTP ${res.status}`);
        console.warn(`generate failed (${lastError.message}), trying fallback`);
        continue;
      }
      const data = await res.json();
      const text =
        (data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content &&
          data.candidates[0].content.parts
            .map((p) => p.text || "")
            .join("")) ||
        "";
      if (text.trim()) return text.trim();
      lastError = new Error(`${model} returned empty text`);
      console.warn(`generate empty (${model}), trying fallback`);
    } catch (e) {
      lastError = e;
      console.warn(`generate error (${model}): ${e.message || e}, trying fallback`);
    }
  }
  throw lastError;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ answer: "Method not allowed", sources: [] });
  }

  const question = ((req.body && req.body.question) || "").toString().trim();
  if (!question) {
    return res.status(400).json({ answer: "Please ask a question about ADCET.", sources: [] });
  }

  try {
    const key = process.env.GEMINI_API_KEY;

    const embedData = await postJSON(EMBED_URL + key, {
      model: "models/gemini-embedding-001",
      content: { parts: [{ text: question }] },
      taskType: "RETRIEVAL_QUERY",
    });
    const q = embedData.embedding.values;
    const qn = norm(q);

    const scored = vectors.map((v) => ({
      v,
      s: dot(q, v.embedding) / (qn * norm(v.embedding)),
    }));
    scored.sort((a, b) => b.s - a.s);
    const top = scored.slice(0, 5);

    const context = top
      .map(
        (r, i) =>
          `--- Retrieved Source ${i + 1} ---\n` +
          `Chunk ID: ${r.v.id}\n` +
          `Similarity score: ${r.s.toFixed(4)}\n` +
          `Source URL: ${r.v.source_url}\n` +
          `Website content:\n${r.v.text}\n` +
          `--- End Source ${i + 1} ---`
      )
      .join("\n");

    const prompt = ANSWER_PROMPT.replace("{question}", question).replace("{context}", context);

    const answer = await generateWithFallback(key, prompt);

    return res.status(200).json({
      answer,
      sources: top.map((r) => ({
        chunk_id: r.v.id,
        source_url: r.v.source_url,
        score: r.s,
      })),
    });
  } catch (e) {
    return res.status(200).json({
      answer: "Sorry, the AI service is temporarily unavailable. Please try again later.",
      sources: [],
    });
  }
}