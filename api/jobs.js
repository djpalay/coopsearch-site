// Vercel serverless function — fetches jobs from Loxo with the API key kept
// server-side (never exposed to the browser). The browser calls /api/jobs.
module.exports = async function handler(req, res) {
  const SLUG = 'coop-search-group';
  const DOMAIN = 'coop-search-group.app.loxo.co';
  const key = process.env.LOXO_API_KEY;

  if (!key) {
    return res.status(500).json({ error: 'missing_api_key' });
  }

  try {
    const r = await fetch(`https://${DOMAIN}/api/${SLUG}/jobs`, {
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${key}`,
      },
    });

    const text = await r.text();
    if (!r.ok) {
      return res
        .status(r.status)
        .json({ error: 'loxo_error', status: r.status, body: text.slice(0, 300) });
    }

    const data = JSON.parse(text);
    // Cache at the edge for 5 min so we don't hammer Loxo on every visit.
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'fetch_failed', message: String((e && e.message) || e) });
  }
};
