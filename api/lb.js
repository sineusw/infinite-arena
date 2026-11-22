// Leaderboard API for Infinite Arena, backed by Vercel Blob.
// Each player's best per board is one empty blob; the score lives in its path,
// so a board is read with a single list() call:
//   lb/<board>/<key>/<id>_<score>_<level>_<bosses>_<plv>_<base64url name>
import { put, list, del } from '@vercel/blob';
import { cors, cleanName } from './_util.js';

const BOARDS = ['scores', 'survival', 'bossrush', 'daily', 'weekly'];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const ID_RE = /^[a-z0-9]{8,32}$/;
const int = (v, max) => Math.max(0, Math.min(max, Math.floor(Number(v) || 0)));
const enc = s => Buffer.from(s, 'utf8').toString('base64url');
const dec = s => { try { return Buffer.from(s, 'base64url').toString('utf8'); } catch { return 'Player'; } };

function boardKey(board, k) {
  if (board === 'daily' || board === 'weekly') return DATE_RE.test(k || '') ? k : null;
  return 'all';
}

async function listAll(prefix) {
  const out = [];
  let cursor;
  do {
    const r = await list({ prefix, cursor, limit: 1000 });
    out.push(...r.blobs);
    cursor = r.hasMore ? r.cursor : undefined;
  } while (cursor);
  return out;
}

function parse(pathname) {
  const f = pathname.split('/').pop().split('_');
  if (f.length < 6) return null;
  return {
    id: f[0], score: +f[1] || 0, level: +f[2] || 1, bosses: +f[3] || 0, plv: +f[4] || 0,
    name: dec(f.slice(5).join('_')).slice(0, 16) || 'Player',
  };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (cors(req, res)) return;
  try {
    if (req.method === 'GET') {
      const { board, key, limit } = req.query;
      if (!BOARDS.includes(board)) return res.status(400).json({ error: 'bad board' });
      const k = boardKey(board, key);
      if (!k) return res.status(400).json({ error: 'bad key' });
      const reports = new Map();
      for (const b of await listAll('reports/')) { const id = b.pathname.split('/')[1]; reports.set(id, (reports.get(id) || 0) + 1); }
      const best = new Map();
      for (const b of await listAll(`lb/${board}/${k}/`)) {
        const r = parse(b.pathname);
        if (r && r.id === 'testclaude0001') { await del(b.url); continue; } // launch smoke-test entry
        if (r) r.name = cleanName(r.name);
        if (r && (reports.get(r.id) || 0) >= 2) continue; // hidden after 2 player reports
        if (r &&(!best.has(r.id) || best.get(r.id).score < r.score)) best.set(r.id, r);
      }
      const n = int(limit, 500) || 500;
      const rows = [...best.values()].sort((a, b) => b.score - a.score).slice(0, n);
      if (board === 'daily') rows.forEach(r => (r.day = k));
      if (board === 'weekly') rows.forEach(r => (r.week = k));
      return res.status(200).json({ rows });
    }

    if (req.method === 'POST') {
      const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
      if (b.report) {
        if (!ID_RE.test(b.report) || !ID_RE.test(b.by || '') || b.report === b.by) return res.status(400).json({ error: 'bad report' });
        await put(`reports/${b.report}/${b.by}`, '1', { access: 'public', addRandomSuffix: false, allowOverwrite: true, contentType: 'text/plain' });
        return res.status(200).json({ ok: true });
      }
      if (!BOARDS.includes(b.board) || !ID_RE.test(b.id || '')) return res.status(400).json({ error: 'bad request' });
      const k = boardKey(b.board, b.board === 'weekly' ? b.week : b.day);
      if (!k) return res.status(400).json({ error: 'bad key' });
      const score = int(b.score, 1e9);
      if (!score) return res.status(400).json({ error: 'no score' });
      const name = cleanName(b.name);
      const prefix = `lb/${b.board}/${k}/${b.id}_`;
      const old = await listAll(prefix);
      if (old.some(o => (parse(o.pathname) || {}).score >= score)) return res.status(200).json({ ok: true, kept: true });
      const path = prefix + [score, int(b.level, 9999) || 1, int(b.bosses, 9999), int(b.plv, 999), enc(name)].join('_');
      await put(path, '1', { access: 'public', addRandomSuffix: false, allowOverwrite: true, contentType: 'text/plain' });
      const stale = old.filter(o => o.pathname !== path).map(o => o.url);
      if (stale.length) await del(stale);
      return res.status(200).json({ ok: true });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'server error' });
  }
}
