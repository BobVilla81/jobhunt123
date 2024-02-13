module.exports = async (req, res) => {
    // Log incoming request headers and body for debugging
    console.log("Request Headers:", req.headers);
    console.log("Request Body:", req.body);

    // Assuming req.body is already parsed as JSON by Vercel (if Content-Type is application/json)
    const { query, location, educationLevel, degreeField, interests, dislikes } = req.body;

    try {
        // Logic to process the request and fetch jobs
        // This is where you would include the logic to fetch jobs from an external API or database.
        // Make sure to include your actual fetching logic here.

        // Example: Fetching jobs from an API
        const jobs = await fetchJobsFromAPI(query, location, educationLevel, degreeField, interests, dislikes);
        // Process and filter jobs based on the logic specific to your application needs

        // Sending a successful response with the jobs data
        res.status(200).json({ jobs });
    } catch (error) {
        console.error("Error processing request:", error);

        // Sending an error response
        res.status(500).send({ error: "Internal Server Error", details: error.message });
    }
};

// Example function to simulate fetching jobs from an external API
// Replace this with your actual function to fetch jobs
async function fetchJobsFromAPI(query, location, educationLevel, degreeField, interests, dislikes) {
    // Mocked fetch logic
    return []; // Return fetched jobs
}

