const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://www.reed.co.uk/api/1.0/search', // This is a hypothetical endpoint; check the actual Reed API docs
  params: {
    keywords: 'java',
    location: 'austin, tx',
    distanceFromLocation: '25',
    // Add other parameters according to Reed's API documentation
  },
  headers: {
    // Authentication method as required by Reed, e.g., API Key in headers or query params
    'Authorization': '5e8f0d41-22be-4a3f-9aee-034b9905b24b' 
  }
};

(async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})();

