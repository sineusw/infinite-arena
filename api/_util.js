// Shared helpers: CORS for the iOS app, and the leaderboard name filter.
const APP_ORIGINS = ['capacitor://localhost', 'ionic://localhost', 'http://localhost', 'https://localhost'];
export function cors(req, res) {
  const o = req.headers.origin;
  if (o && APP_ORIGINS.includes(o)) {
    res.setHeader('Access-Control-Allow-Origin', o);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') { res.status(204).end(); return true; }
  return false;
}
// Blocks common profanity and slurs, including l33t spellings and spacing tricks.
const BAD = ['fuck','shit','bitch','cunt','dick','cock','pussy','asshole','bastard','whore','slut','fag','faggot','nigger','nigga','retard','rape','rapist','penis','vagina','porn','sex','nazi','hitler','kkk','tranny','spic','chink','kike','wetback','twat','wank','jizz','cum','boob','tits','anal','dildo','molest','pedo','hoe','thot','damn','piss','crap','douche','motherf','milf','coon','gook','dyke'];
const LEET = { '0': 'o', '1': 'i', '!': 'i', '3': 'e', '4': 'a', '@': 'a', '5': 's', '$': 's', '7': 't', '8': 'b', '9': 'g', '+': 't' };
export function badName(name) {
  const flat = String(name || '').toLowerCase().replace(/[01!34@5$789+]/g, c => LEET[c]).replace(/[^a-z]/g, '').replace(/(.)\1+/g, '$1');
  return BAD.some(w => flat.includes(w.replace(/(.)\1+/g, '$1')));
}
export function cleanName(name) {
  const n = String(name || 'Player').replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 16) || 'Player';
  return badName(n) ? 'Player' : n;
}
