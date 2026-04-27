import { askGroq } from "@/lib/groq";

export async function POST(req) {
  const { messages } = await req.json();

  const reply = await askGroq(messages);

  return Response.json({ reply });
}