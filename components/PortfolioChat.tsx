"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type Message = { role: "user" | "assistant"; text: string };
const suggestions = ["Tell me about your experience", "What did you build for MIGAL?", "What roles are you looking for?"];

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const end = useRef<HTMLDivElement>(null);
  const pending = useRef(false);

  useEffect(() => { if (open) { dialog.current?.showModal(); field.current?.focus(); } else dialog.current?.close(); }, [open]);
  useEffect(() => { end.current?.scrollIntoView({ block: "nearest" }); }, [messages, busy, error]);
  function close() { setOpen(false); trigger.current?.focus(); }
  async function send(text: string) {
    if (pending.current || !text.trim()) return;
    pending.current = true;
    const previous = messages;
    const next: Message[] = [...previous, { role: "user", text: text.trim() }];
    setMessages(next); setInput(""); setBusy(true); setError("");
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(-11) }), signal: AbortSignal.timeout(25_000) });
      const data = await response.json();
      if (!response.ok || typeof data.text !== "string") throw new Error(data.error || "Please try again in a moment.");
      setMessages([...next, { role: "assistant", text: data.text }]);
    } catch (err) {
      setMessages(previous); setInput(text);
      setError(err instanceof Error && err.name !== "TimeoutError" ? err.message : "The connection timed out. Please try again.");
    } finally { pending.current = false; setBusy(false); field.current?.focus(); }
  }
  return (
    <>
      <button ref={trigger} onClick={() => setOpen(true)} aria-haspopup="dialog" className="fixed bottom-[calc(4rem+env(safe-area-inset-bottom))] right-4 z-[70] inline-flex min-h-12 items-center gap-2 rounded-full border border-cyan-100/30 bg-cyan-200 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-xl transition hover:bg-cyan-100 sm:right-6">
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask Rami <span className="rounded bg-black/10 px-1.5 py-0.5 text-[10px]">AI</span>
      </button>
      <dialog ref={dialog} onCancel={close} onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={e => { if (e.target === dialog.current) close(); }} aria-labelledby="chat-title" aria-describedby="chat-disclosure" className="fixed inset-0 m-auto h-[min(680px,calc(100dvh-2rem))] max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 p-0 text-white shadow-2xl backdrop:bg-black/60 sm:mr-6">
        <div className="flex h-full min-h-0 flex-col">
          <header className="flex shrink-0 items-start justify-between gap-3 border-b border-white/10 p-4">
            <div><h2 id="chat-title" className="font-semibold">Ask Rami <span className="ml-1 text-xs font-normal text-cyan-200">AI assistant</span></h2><p id="chat-disclosure" className="mt-1 text-xs leading-5 text-zinc-400">Answers in my voice, powered by AI. Not a live chat with me.</p></div>
            <button onClick={close} aria-label="Close chat" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg hover:bg-white/10"><X className="h-5 w-5" /></button>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4">
            <p className="rounded-2xl rounded-tl-sm bg-white/5 p-4 text-sm leading-6 text-zinc-200">Hey! Want to know more about my experience, projects, or what I enjoy building? Ask away.</p>
            {messages.length === 0 && <div className="mt-4 grid gap-2">{suggestions.map(text => <button key={text} disabled={busy} onClick={() => send(text)} className="min-h-11 rounded-xl border border-cyan-200/20 px-3 py-2 text-left text-xs leading-5 text-cyan-100 transition hover:bg-cyan-200/10 disabled:opacity-50">{text}</button>)}</div>}
            <div role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" className="mt-4 space-y-3">{messages.map((m, i) => <div key={i} className={`whitespace-pre-wrap break-words rounded-2xl p-3 text-sm leading-6 ${m.role === "user" ? "ml-6 rounded-tr-sm bg-cyan-200 text-zinc-950" : "mr-3 rounded-tl-sm bg-white/5 text-zinc-200"}`}><span className="sr-only">{m.role === "user" ? "You: " : "Rami’s AI: "}</span>{m.text}</div>)}</div>
            {busy && <p role="status" className="mt-4 text-xs text-cyan-200">Thinking about your question…</p>}
            {error && <p role="alert" className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/5 p-3 text-sm leading-6 text-amber-100">{error}</p>}
            <div ref={end} />
          </div>
          <div className="shrink-0 border-t border-white/10 p-4">
            <p className="mb-3 text-[11px] leading-4 text-zinc-400">Messages are sent to Google Gemini and may be used to improve its services. Please avoid sensitive information. AI can make mistakes.</p>
            <form onSubmit={e => { e.preventDefault(); void send(input); }} className="flex gap-2">
              <label htmlFor="chat-question" className="sr-only">Your question</label>
              <input ref={field} id="chat-question" value={input} onChange={e => setInput(e.target.value)} maxLength={1000} disabled={busy} autoComplete="off" placeholder="Ask about my work…" className="min-h-12 min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-3 text-base text-white placeholder:text-zinc-500 disabled:opacity-50" />
              <button type="submit" disabled={busy || !input.trim()} aria-label="Send question" className="grid min-h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-200 text-zinc-950 disabled:opacity-40"><Send className="h-4 w-4" /></button>
            </form>
            <div className="mt-3 flex items-center justify-between gap-2 text-xs"><a href="mailto:ramiabujabal22@gmail.com" className="inline-flex min-h-8 items-center text-cyan-200 hover:underline">Email me directly ↗</a><button disabled={busy || messages.length === 0} onClick={() => { setMessages([]); setError(""); setInput(""); field.current?.focus(); }} className="min-h-8 text-zinc-400 hover:text-white disabled:opacity-40">Clear chat</button></div>
          </div>
        </div>
      </dialog>
    </>
  );
}
