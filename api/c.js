// Challenge link preview: /c?vs=<name>&m=<mode>&s=<metric>
// Chat apps (iMessage, WhatsApp, Discord, X) read these tags to show
// "<name> challenges you: beat 12,345 in Classic" instead of a bare URL.
// People are sent straight on to the game with the same query string.
import { cleanName } from './_util.js';

const SITE = 'https://infinite-arena-ten.vercel.app';
const MODES = { classic: 'Classic', survival: 'Survival', boss: 'Boss Rush', daily: 'the Daily Challenge' };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtTime = t => { t = Math.floor(t); const m = Math.floor(t / 60), s = t % 60; return m ? m + 'm ' + String(s).padStart(2, '0') + 's' : s + 's'; };

export default function handler(req, res) {
  const q = req.query || {};
  const m = MODES[q.m] ? q.m : null;
  const s = Math.floor(Number(q.s));
  const ok = m && s > 0 && s <= 1e9 && q.vs;
  const name = ok ? cleanName(q.vs) : '';
  const what = !ok ? '' : m === 'survival' ? 'survive ' + fmtTime(s) + ' in Survival'
    : 'beat ' + s.toLocaleString('en-US') + ' in ' + MODES[m];
  const title = ok ? name + ' challenges you: ' + what : '99% Impossible: Infinite Arena';
  const desc = ok ? 'Think you can? 99% of players fold. Free, no download, plays in your browser.'
    : 'Dodge everything. Beat the bosses. Free, no download. 99% of players fold.';
  const qs = new URLSearchParams();
  if (ok) { qs.set('vs', name); qs.set('m', m); qs.set('s', String(s)); }
  qs.set('utm_source', q.utm_source === 'card' ? 'card' : 'challenge');
  const dest = '/?' + qs.toString();
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=86400');
  res.status(200).send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="99% Impossible: Infinite Arena">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(SITE + '/c?' + qs.toString())}">
<meta property="og:image" content="${SITE}/og.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE}/og.jpg">
<meta http-equiv="refresh" content="0;url=${esc(dest)}">
<script>location.replace(${JSON.stringify(dest).replace(/</g, '\\u003c')})</script>
</head><body style="background:#07080f;color:#fff;font-family:system-ui;text-align:center;padding-top:30vh">
<a href="${esc(dest)}" style="color:#ffd23f">Play 99% Impossible</a></body></html>`);
}
