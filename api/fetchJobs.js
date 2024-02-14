const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://www.reed.co.uk/api/1.0/search',
  params: {
    keywords: 'accountant',
    location: 'london',
    employerid: 123,
    distancefromlocation: 15
  },
  headers: {
    'Authorization': 'Basic ' + Buffer.from('5e8f0d41-22be-4a3f-9aee-034b9905b24b').toString('base64')
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

