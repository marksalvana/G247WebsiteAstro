// /api/contact — receives the brief form submission.
// Runs as a Vercel Serverless Function (prerender:false).
//
// TODO (follow-up): wire to a real destination — e.g. forward to an email
// service (Resend/Postmark), a CRM, or Slack webhook. For now it validates
// the payload, logs it server-side, and returns success so the UI can confirm.
import type { APIRoute } from 'astro';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string> = {};
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      data = await request.json();
    } else {
      data = Object.fromEntries(await request.formData()) as Record<string, string>;
    }
  } catch {
    return json({ ok: false, error: 'Invalid payload' }, 400);
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: 'Name and a valid email are required.' }, 422);
  }

  // Server-side capture point. Replace with email/CRM integration.
  console.log('[contact] new brief', {
    name, email,
    company: (data.company || '').slice(0, 200),
    topic: (data.topic || '').slice(0, 80),
    brief: (data.brief || '').slice(0, 4000),
    at: new Date().toISOString(),
  });

  return json({ ok: true });
};
