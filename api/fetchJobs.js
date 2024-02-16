const axios = require('axios');

async function fetchJobsFromReed(keywords, location) {
  const options = {
    method: 'GET',
    url: 'https://www.reed.co.uk/api/1.0/search',
    params: {
      keywords: keywords,
      location: location,
    },
    headers: {
      'Authorization': 'Basic ' + Buffer.from('your_api_key_here').toString('base64'),
    },
  };

  try {
    const response = await axios.request(options);

    // Including CORS headers in the response
    const headers = {
      'Access-Control-Allow-Origin': '*', // Allows all origins
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Return response with CORS headers
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error(error);
    // Ensure CORS headers are included even in the error response
    return {
      statusCode: error.statusCode || 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: error.message }),
    };
  }
}

module.exports = fetchJobsFromReed;

