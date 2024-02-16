const axios = require('axios');

// Function to fetch jobs from Reed API
// Now accepts keywords and location as parameters
async function fetchJobsFromReed(keywords, location) {
  const options = {
    method: 'GET',
    url: 'https://www.reed.co.uk/api/1.0/search',
    params: {
      keywords: keywords, // Use function parameter
      location: location, // Use function parameter
      // You can add or remove parameters as needed
    },
    headers: {
      'Authorization': 'Basic ' + Buffer.from('5e8f0d41-22be-4a3f-9aee-034b9905b24b').toString('base64') // Make sure to use your actual API key here
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it in the calling context
  }
}

module.exports = fetchJobsFromReed; // Export the function for use in other parts of your application

