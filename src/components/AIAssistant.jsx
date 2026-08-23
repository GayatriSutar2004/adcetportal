import { useState } from "react";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm ADCET AI Assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thank you for asking! For detailed assistance, check our Notices or Admissions page.", sender: "bot" }
      ]);
    }, 800);
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
                    maxWidth: "80%"
                  }}
                >
                  {msg.text}
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
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIAssistant;
