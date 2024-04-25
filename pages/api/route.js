import axios from 'axios';

export default async function handler(req, res) {
    const apiKey = process.env.INTERNAL_API_KEY;
    const route = req.body.route;

    if (!route) {
        return res.status(400).json({ error: 'Missing "route" parameter' });
    }

    if (req.method === 'POST') {
        if (req.headers.origin && route) {
            try {
                const proxyToRoute = req.headers.origin + '/api/' + route;
                const proxyResponse = await axios.post(proxyToRoute,
                    {
                        data: req.body
                    },
                    {
                        headers: { 'Authorization': `Bearer ${apiKey}` }
                    });
                res.status(200).json(proxyResponse.data);
            } catch (e) {
                if (e.response) {
                    res.status(e.response.status).json({ error: e.response.data });
                } else {
                    res.status(500).json({ error: 'An unknown error occurred' });
                }
            }
        } else {
            res.status(403).json({ error: 'Unauthorized' });
        }
    }
}