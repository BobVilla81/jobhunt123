const axios = require('axios');

module.exports = async (req, res) => {
    const options = {
        method: 'GET',
         url: 'https://indeed-api2.p.rapidapi.com/analyst/ie/1',
        params: {
            query: "software engineer", // Example search term
            location: "San Francisco, CA", // Example location
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
