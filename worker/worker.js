// Jach chat proxy (Cloudflare Worker).
// Keeps the Gemini API key on the server, so the app never ships it.
// Deploy: see README in this folder. Secret: GEMINI_KEY. Var: ALLOWED_ORIGINS (comma separated).
const MODELS = ['gemini-flash-latest', 'gemini-flash-lite-latest', 'gemini-2.5-flash', 'gemini-2.5-flash-lite'];
const PER_IP_PER_MIN = 8;            // soft limit per visitor IP, per worker instance
const hits = new Map();

function cors(origin, env) {
  const allowed = (env.ALLOWED_ORIGINS || 'https://iiswaranii.github.io').split(',').map(s => s.trim());
  const ok = allowed.includes(origin);
  return { ok, headers: { 'Access-Control-Allow-Origin': ok ? origin : allowed[0], 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin' } };
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const c = cors(origin, env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: c.headers });
    if (req.method !== 'POST' || !c.ok) return new Response('Not allowed', { status: 403, headers: c.headers });

    const url = new URL(req.url);
    const m = url.pathname.match(/^\/v1beta\/models\/([\w.-]+):generateContent$/);
    if (!m || !MODELS.includes(m[1])) return new Response('Unknown model', { status: 400, headers: c.headers });

    const ip = req.headers.get('CF-Connecting-IP') || 'x', now = Date.now();
    const list = (hits.get(ip) || []).filter(t => now - t < 60000); list.push(now); hits.set(ip, list);
    if (list.length > PER_IP_PER_MIN) return new Response('Slow down', { status: 429, headers: c.headers });

    const body = await req.text();
    if (body.length > 200000) return new Response('Too large', { status: 413, headers: c.headers });

    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m[1]}:generateContent`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_KEY }, body
    });
    return new Response(r.body, { status: r.status, headers: { ...c.headers, 'Content-Type': 'application/json' } });
  }
};
