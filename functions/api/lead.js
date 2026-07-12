// Pages Function: POST /api/lead
// Validates, rate-limits, and stores form submissions in the LEADS KV namespace.
// Leads are readable in the Cloudflare dashboard: Workers & Pages → KV → LEADS.

const MAX_BODY = 10_000;
const RATE_LIMIT = 5; // submissions per IP per hour

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export async function onRequestPost({ request, env }) {
  let data;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return json(413, { error: 'Message too long.' });
    data = JSON.parse(raw);
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  // Honeypot: real users never fill this field.
  if (data.website) return json(200, { ok: true });

  const name = String(data.name || '').trim().slice(0, 200);
  const email = String(data.email || '').trim().slice(0, 200);
  const need = String(data.need || '').trim().slice(0, 100);
  const timeline = String(data.timeline || '').trim().slice(0, 100);
  const message = String(data.message || '').trim().slice(0, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(422, { error: 'Please fill in your name, a valid email, and a message.' });
  }

  // Rate limit per IP
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const rlKey = `rl:${ip}`;
  const count = parseInt((await env.LEADS.get(rlKey)) || '0', 10);
  if (count >= RATE_LIMIT) {
    return json(429, { error: 'Too many submissions — try again in an hour.' });
  }
  await env.LEADS.put(rlKey, String(count + 1), { expirationTtl: 3600 });

  const ts = new Date().toISOString();
  const id = crypto.randomUUID().slice(0, 8);
  const lead = {
    ts,
    name,
    email,
    need,
    timeline,
    message,
    country: request.headers.get('cf-ipcountry') || '',
    ua: (request.headers.get('user-agent') || '').slice(0, 300),
  };

  await env.LEADS.put(`lead:${ts}:${id}`, JSON.stringify(lead, null, 2));

  return json(200, { ok: true });
}
