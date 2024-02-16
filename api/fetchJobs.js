const axios = require('axios');

module.exports = async (req, res) => {
  const { keywords, location } = req.query;

  const options = {
    method: 'GET',
    url: 'https://www.reed.co.uk/api/1.0/search',
    params: { keywords, location },
    headers: {
      'Authorization': 'Basic ' + Buffer.from('5e8f0d41-22be-4a3f-9aee-034b9905b24b').toString('base64'),
    },
  };

  try {
    const response = await axios.request(options);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this for production
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Return the response from the Reed API to the client
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching jobs:', error);

    // Including error handling with CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

