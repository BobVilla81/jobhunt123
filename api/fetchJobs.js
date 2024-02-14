const axios = require('axios');

module.exports = async (req, res) => {
    console.log("Starting to process fetchJobs request...");

    if (!req.body) {
        console.error("Request body is undefined. Make sure Content-Type is set to application/json and the body is not empty.");
        return res.status(400).json({ error: "Request body is undefined." });
    }

    // Extract additional parameters from request body
    const { query, location } = req.body;

    console.log("Preparing to call external API...");
    try {
        // Include all parameters in the API call
        const response = await axios.get('https://example.com/api/jobs', {
            params: {
                query, 
                location,

            }
        });
        console.log("External API call successful.");

        // If there's any data processing involved, log before starting it
        console.log("Processing data...");
        const processedData = processData(response.data);
        console.log("Data processing completed.");

        res.status(200).json(processedData);
    } catch (error) {
        console.error("Error calling external API:", error.message);
        return res.status(500).json({ error: "Failed to fetch jobs from external API." });
    }
};

