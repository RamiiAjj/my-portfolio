import { chatInstruction } from "@/lib/chat-profile";

export const runtime = "nodejs";
const windows = new Map<string, { count: number; expires: number }>();
function allow(key: string, limit: number) {
  const now = Date.now();
  for (const [id, value] of windows) if (value.expires <= now) windows.delete(id);
  const value = windows.get(key) ?? { count: 0, expires: now + 60_000 };
  if (value.count >= limit) return false;
  value.count++;
  windows.set(key, value);
  return true;
}
const reply = (error: string, status: number) => Response.json({ error }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.get("host")) return reply("Please use the chat on Rami’s portfolio.", 403);
    } catch { return reply("Invalid request origin.", 403); }
  }
  if (!allow("global", 30)) return reply("The chat is busy. Please try again in a minute.", 429);
  // Best-effort per-instance limits. Only trust client IP headers set by the hosting platform.
  const ip = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for") : null;
  if (ip && !allow(`ip:${ip}`, 6)) return reply("Please wait a minute before sending more questions.", 429);
  let data: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("Please send a question.", 400);
    let size = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16_000) { await reader.cancel(); return reply("Please keep the conversation shorter.", 413); }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch { return reply("Please send a valid question.", 400); }
  const messages = (data as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(messages) || messages.length < 1 || messages.length > 11 || messages.length % 2 !== 1 || !messages.every((m, i) => m && m.role === (i % 2 === 0 ? "user" : "assistant") && typeof m.text === "string" && m.text.trim().length > 0 && m.text.length <= 2000)) {
    return reply("Please start a new conversation or shorten your question.", 400);
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key) return reply("My AI assistant isn’t connected yet. You can reach me using the email link below.", 503);
  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      signal: AbortSignal.timeout(20_000), cache: "no-store",
      body: JSON.stringify({ systemInstruction: { parts: [{ text: chatInstruction + (messages.length === 1 ? "\nThis is the first reply: briefly introduce yourself once, then answer." : "\nThis is a follow-up reply: do not greet or introduce yourself again. Answer the question directly unless explicitly asked about your identity.") }] }, contents: messages.map(m => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.text }] })), generationConfig: { maxOutputTokens: 450, temperature: 0.35 } }),
    });
    if (!response.ok) return reply(response.status === 429 ? "The chat has reached its limit for now. Please try later or email me below." : "The assistant is temporarily unavailable. Please try again or email me below.", response.status === 429 ? 429 : 502);
    const result = await response.json();
    const text = result.candidates?.[0]?.content?.parts?.filter((p: { text?: string; thought?: boolean }) => !p.thought && typeof p.text === "string").map((p: { text: string }) => p.text).join("").trim();
    if (!text) return reply("I couldn’t answer that. Try a question about my work or projects.", 502);
    return Response.json({ text: text.slice(0, 2000) }, { headers: { "Cache-Control": "no-store" } });
  } catch { return reply("The connection took too long. Please try again or email me below.", 504); }
}
