const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://indeed-indeed.p.rapidapi.com/apisearch',
  params: {
    publisher: '<REQUIRED>',
    v: '2',
    format: 'json',
    callback: '<REQUIRED>',
    q: 'java',
    l: 'austin, tx',
    sort: '<REQUIRED>',
    radius: '25',
    st: '<REQUIRED>',
    jt: '<REQUIRED>',
    start: '<REQUIRED>',
    limit: '<REQUIRED>',
    fromage: '<REQUIRED>',
    highlight: '<REQUIRED>',
    filter: '<REQUIRED>',
    latlong: '<REQUIRED>',
    co: '<REQUIRED>',
    chnl: '<REQUIRED>',
    userip: '<REQUIRED>',
    useragent: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': 'd9b28f633dmsh7171c1442f2f9f6p193c42jsn036bea77781d',
    'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
