# Jach chat proxy

A tiny Cloudflare Worker that forwards the app's chat requests to Google Gemini, so the API key stays secret.

1. Create a Gemini API key at https://aistudio.google.com (free tier is fine for testing).
2. Create a free Cloudflare account, then: Workers & Pages › Create › Worker › paste `worker.js` › Deploy.
3. In the Worker's Settings › Variables: add a **secret** `GEMINI_KEY` (your key) and a variable `ALLOWED_ORIGINS` = `https://iiswaranii.github.io`.
4. Put the Worker URL (e.g. `https://jach-chat.<you>.workers.dev`) into `PROXY` at the top of the chat code in `index.html`.

Free limits: Cloudflare Workers 100,000 requests/day; Gemini free tier is small and rate-limited (fine for testing, not for thousands of users).
