// Voices for Petty, Daisy and Mick. GET ?list=1 returns all lines; GET ?c=<who>&p=<pool>&i=<n> returns one line as MP3.
// Only lines from _petty-lines.js are voiced, so nobody can spend ElevenLabs credits on other text.
// Uses ELEVENLABS_API_KEY if this project has it; otherwise relays through 99% Impossible's
// server-side voice endpoint (petty-voice / cast-voice, same voices, models and settings). The key never reaches the browser.
import { LINES } from './_petty-lines.js';
import { cors } from './_util.js';

const CAST = {
  petty: { voiceId: 'qxePw1S1QmBgjlU3GIy5', modelId: 'eleven_flash_v2_5', settings: { stability: 0.43, similarity_boost: 0.84, style: 0.42, use_speaker_boost: true, speed: 0.96 } },
  daisy: { voiceId: '9QPzUjm1evjwY2ENQBKU', modelId: 'eleven_multilingual_v2', settings: { stability: 0.66, similarity_boost: 0.76, style: 0.43, use_speaker_boost: true, speed: 1.0 } },
  mick: { voiceId: 'YLbQE9U7P1K6rBNJWNSv', modelId: 'eleven_multilingual_v2', settings: { stability: 0.5, similarity_boost: 0.64, style: 0.85, use_speaker_boost: true, speed: 1.01 } },
};
const RELAY = 'https://99-percent-impossible.vercel.app/api/';

async function voice(c, text) {
  const key = process.env.ELEVENLABS_API_KEY, cfg = CAST[c];
  if (key) {
    return fetch(`https://api.elevenlabs.io/v1/text-to-speech/${cfg.voiceId}?output_format=mp3_22050_32&optimize_streaming_latency=4`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
      body: JSON.stringify({ text, model_id: cfg.modelId, voice_settings: cfg.settings }),
    });
  }
  const body = c === 'petty' ? { text } : { character: c, text };
  return fetch(RELAY + (c === 'petty' ? 'petty-voice' : 'cast-voice'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
}

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { list, p, i } = req.query, c = CAST[req.query.c] ? req.query.c : 'petty';
  if (list) {
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
    return res.status(200).json({ lines: LINES });
  }
  const text = LINES[c][p] && LINES[c][p][Number(i)];
  if (!text) return res.status(404).json({ error: 'Unknown line' });
  try {
    const r = await voice(c, text);
    if (!r.ok) { console.error('Petty voice failed', r.status); return res.status(502).json({ error: 'Voice unavailable' }); }
    const audio = Buffer.from(await r.arrayBuffer());
    res.setHeader('Content-Type', 'audio/mpeg');
    // Same pool+index+version always yields the same clip, so the CDN serves repeats for free.
    res.setHeader('Cache-Control', 'public, max-age=604800, s-maxage=31536000, immutable');
    return res.status(200).send(audio);
  } catch (e) {
    console.error('Petty voice error', e);
    return res.status(500).json({ error: 'Voice unavailable' });
  }
}
