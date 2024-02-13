const axios = require('axios');

module.exports = async (req, res) => {
    console.log("Starting to process fetchJobs request...");

    // Assume req.body contains necessary parameters for the API call
    const { query, location } = req.body;

    console.log("Preparing to call external API...");
    try {
        const response = await axios.get('https://example.com/api/jobs', {
            params: { query, location }
        });
        console.log("External API call successful.");

        // If there's any data processing involved, log before starting it
        console.log("Processing data...");
        const processedData = processData(response.data);
        console.log("Data processing completed.");

        res.status(200).json(processedData);
    } catch (error) {
        console.error("Error during function execution:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("fetchJobs function execution completed.");
};

function processData(data) {
    // Process your data here
    return data; // Return the processed data
}

