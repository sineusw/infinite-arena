// Petty's voice. GET ?list=1 returns his lines; GET ?p=<pool>&i=<n> returns that line as MP3.
// Only lines from _petty-lines.js are voiced, so nobody can spend ElevenLabs credits on other text.
// Uses ELEVENLABS_API_KEY if this project has it; otherwise relays through 99% Impossible's
// server-side voice endpoint (same voice, model and settings). The key never reaches the browser.
import { LINES } from './_petty-lines.js';

const VOICE_ID = 'qxePw1S1QmBgjlU3GIy5';
const SETTINGS = { stability: 0.43, similarity_boost: 0.84, style: 0.42, use_speaker_boost: true, speed: 0.96 };
const RELAY = 'https://99-percent-impossible.vercel.app/api/petty-voice';

async function voice(text) {
  const key = process.env.ELEVENLABS_API_KEY;
  if (key) {
    return fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_22050_32&optimize_streaming_latency=4`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
      body: JSON.stringify({ text, model_id: 'eleven_flash_v2_5', voice_settings: SETTINGS }),
    });
  }
  return fetch(RELAY, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { list, p, i } = req.query;
  if (list) {
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
    return res.status(200).json({ lines: LINES });
  }
  const text = LINES[p] && LINES[p][Number(i)];
  if (!text) return res.status(404).json({ error: 'Unknown line' });
  try {
    const r = await voice(text);
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
