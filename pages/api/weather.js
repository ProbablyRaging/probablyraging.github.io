import axios from 'axios';

export default async function POST(req, res) {
    if (req.headers.authorization.split(' ')[1] !== process.env.INTERNAL_API_KEY) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=sydney`);

        return res.status(200).json({ message: 'Success', data: response.data });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}