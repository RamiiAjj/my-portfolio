# Portfolio assistant

Create a Gemini API key at https://aistudio.google.com/apikey and add it to `.env.local`:

```env
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-3.5-flash-lite
```

Choose an available text model with free-tier quota in your AI Studio account. The model is configurable because availability and quotas change. Restart the development server after configuring it. Add the same server-only environment variables to your hosting provider when deploying; never prefix the key with NEXT_PUBLIC or commit it. The `.env.local` file is already ignored.

Edit `lib/chat-profile.ts` to update approved biographical facts and voice. Project descriptions are imported from `lib/data.ts`, excluding placeholder links. Visitors see an AI disclosure and Google data-use notice before sending a question. Conversation history lives only in component memory and is not written to storage by this app.

The route validates message roles, bounds history/body size, times out requests, and handles missing credentials and provider failures without exposing provider error bodies. Limits are best-effort in memory: 30 requests/minute per process, plus 6/minute per Vercel-provided IP. They reset on process restarts and are not shared across instances. Before a public launch, configure platform/WAF or shared-store rate limits and confirm the Gemini project's quota/billing settings. Origin checks are not authentication. Model instructions reduce unsupported claims but do not guarantee factual accuracy; check live answers after adding the key.

API reference: https://ai.google.dev/api/generate-content
