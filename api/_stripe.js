// Shared Stripe helpers and the item catalog (prices live here, never in the browser).
export const ITEMS = {
  hearts1: { name: '1 Heart (revive)', cents: 99 },
  hearts2: { name: '2 Hearts (revive)', cents: 149 },
  hearts3: { name: '3 Hearts (revive)', cents: 199 },
  skin_smiley: { name: 'Smiley skin', cents: 99 },
  skin_eye: { name: 'Eyeball skin', cents: 99 },
  skin_beach: { name: 'Beach Ball skin', cents: 99 },
  skin_planet: { name: 'Ringed Planet skin', cents: 99 },
  skin_ninja: { name: 'Ninja skin', cents: 99 },
  skin_robot: { name: 'Robo skin', cents: 99 },
  skin_fire: { name: 'Fireball skin', cents: 199 },
  skin_galaxy: { name: 'Galaxy skin', cents: 199 },
  skin_gem: { name: 'Diamond skin', cents: 299 },
  theme_sunset: { name: 'Sunset Drive color pack', cents: 99 },
  theme_ice: { name: 'Frostbite color pack', cents: 99 },
  theme_toxic: { name: 'Toxic Waste color pack', cents: 99 },
  theme_candy: { name: 'Candy Crush color pack', cents: 99 },
  theme_retro: { name: 'Retro Terminal color pack', cents: 99 },
  theme_gold: { name: '24K Gold color pack', cents: 99 },
};

function form(obj, prefix, out = []) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}[${k}]` : k;
    if (v && typeof v === 'object') form(v, key, out);
    else out.push(encodeURIComponent(key) + '=' + encodeURIComponent(v));
  }
  return out.join('&');
}

export async function stripe(method, path, body) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw Object.assign(new Error('Payments are not set up yet.'), { status: 503 });
  const r = await fetch('https://api.stripe.com/v1' + path, {
    method,
    headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body ? form(body) : undefined,
  });
  const j = await r.json();
  if (!r.ok) throw Object.assign(new Error(j.error?.message || 'Stripe error'), { status: 502 });
  return j;
}
