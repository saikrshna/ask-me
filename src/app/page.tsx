"use client";

import { useState } from "react";

// ✅ Define Message Type
type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Create new message list
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ important
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      // Ensure proper structure
      const aiMessage: Message = {
        role: "assistant",
        content: data.reply?.content || "No response",
      };

      setMessages([...newMessages, aiMessage]);
    } catch (error) {
      console.error("Error:", error);

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Error fetching response",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>

      {/* Chat Box */}
      <div className="border p-4 h-100 overflow-y-auto mb-4 rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.role === "user"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}

        {loading && <p className="text-sm text-gray-500">Thinking...</p>}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder="Type a message..."
        />

        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </main>
  );
}