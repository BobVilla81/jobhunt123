const axios = require('axios');

module.exports = async (req, res) => {
    // Set CORS headers
    // Allow-Origin header allows all domains (*) or you can specify domains like https://yourdomain.com
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Check if it's a preflight request and end it after setting headers
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Your API call and the rest of your function logic below
    const options = {
        method: 'GET',
        url: 'https://indeed-api2.p.rapidapi.com/analyst/ie/1',
        params: {
            query: "software engineer",
            location: "San Francisco, CA",
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'indeed-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
};

