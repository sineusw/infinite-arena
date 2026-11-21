// POST {item} -> {url} of a Stripe Checkout page for that item.
import { ITEMS, stripe } from './_stripe.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
  try {
    const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const item = ITEMS[b.item];
    if (!item) return res.status(400).json({ error: 'unknown item' });
    const origin = `https://${req.headers['x-forwarded-host'] || req.headers.host}`;
    const s = await stripe('POST', '/checkout/sessions', {
      mode: 'payment',
      line_items: { 0: { quantity: 1, price_data: { currency: 'usd', unit_amount: item.cents, product_data: { name: item.name } } } },
      metadata: { item: b.item },
      success_url: `${origin}/paid.html?sid={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/paid.html?cancel=1`,
    });
    return res.status(200).json({ url: s.url });
  } catch (e) {
    console.error(e);
    return res.status(e.status || 500).json({ error: e.message || 'server error' });
  }
}
