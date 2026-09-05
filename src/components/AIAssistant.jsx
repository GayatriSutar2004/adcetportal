import { useState } from "react";

// Point this at your deployed Python backend (see deploy steps in chat).
const API_URL = "https://backend-ai-csuc.onrender.com";
const API_BASE = API_URL.replace(/\/$/, "");

const LOADING_TEXT = "…";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm ADCET AI Assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    const question = input.trim();
    if (!question || isLoading) return;

    setMessages((prev) => [...prev, { text: question, sender: "user" }]);
    setInput("");
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: LOADING_TEXT, sender: "bot", pending: true }]);

    try {
      const res = await fetch(`${API_BASE}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();

      setMessages((prev) =>
        prev.map((m) => (m.pending ? { ...m, pending: false, text: data.answer } : m))
      );
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.pending
            ? {
                ...m,
                pending: false,
                text: "Sorry, the AI service is temporarily unavailable. Please try again later."
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className="ai-widget-button" onClick={() => setIsOpen(!isOpen)}>
        🤖 {isOpen ? "Close AI" : "Ask ADCET AI"}
      </button>

      {isOpen && (
        <div className="ai-chat-box">
          <div className="chat-header">
            <span>ADCET AI Assistant</span>
            <span style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}>✕</span>
          </div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "8px 0"
                }}
              >
                <span
                  style={{
                    background: msg.sender === "user" ? "#0284c7" : "#e2e8f0",
                    color: msg.sender === "user" ? "white" : "#1e293b",
                    padding: "6px 12px",
                    borderRadius: "12px",
                    display: "inline-block",
                    maxWidth: "80%",
                    opacity: msg.pending ? 0.6 : 1
                  }}
                >
                  {msg.text === LOADING_TEXT ? "ADCET AI is thinking…" : msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIAssistant;