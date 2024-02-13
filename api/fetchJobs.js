const axios = require('axios');

module.exports = async (req, res) => {
    // Assume req.body contains the dislikes array among other parameters
    const { query, location, dislikes } = req.body;

    const options = {
        method: 'GET',
        url: 'https://indeed-api2.p.rapidapi.com/analyst/ie/1',
        params: { query, location },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'indeed-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        let filteredData = response.data;

        // Filter logic: This needs to be adjusted based on the actual data structure and criteria
        if (dislikes && dislikes.length > 0) {
            filteredData.jobs = filteredData.jobs.filter(job => {
                // Implement the logic to check if the job should be excluded based on dislikes
                // This is a placeholder logic, adjust according to your data structure and needs
                return !dislikes.some(dislike => job.description.toLowerCase().includes(dislike.toLowerCase()));
            });
        }

        res.status(200).json(filteredData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
};

