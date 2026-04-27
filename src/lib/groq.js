export async function askGroq(messages) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: messages, // 👈 full conversation
    }),
  });

  const data = await res.json();

  return data.choices?.[0]?.message || { role: "assistant", content: "No response" };
}