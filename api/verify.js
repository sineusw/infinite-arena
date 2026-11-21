// GET ?sid= -> {paid, item} after checking the session with Stripe.
import { ITEMS, stripe } from './_stripe.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  try {
    const sid = String(req.query.sid || '');
    if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(sid)) return res.status(400).json({ error: 'bad session' });
    const s = await stripe('GET', '/checkout/sessions/' + sid);
    const item = s.metadata?.item;
    return res.status(200).json({ paid: s.payment_status === 'paid' && !!ITEMS[item], item: item || null, sid });
  } catch (e) {
    console.error(e);
    return res.status(e.status || 500).json({ error: e.message || 'server error' });
  }
}
