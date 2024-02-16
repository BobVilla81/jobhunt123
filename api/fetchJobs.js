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
    res.setHeader('Access-Control-Allow-Origin', 'www.jobhunt123.com'); // For development, use '*' to allow all domains
    // For production, replace '*' with your actual domain, e.g., 'https://www.yourdomain.com'
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Send the response from Reed API back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    res.status(error.response.status || 500).json({ message: error.message });
  }
};

