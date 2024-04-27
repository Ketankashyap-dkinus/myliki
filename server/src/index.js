// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!'); 
});

// Define other routes as needed...

// Start the server
const PORT = process.env.PORT || 3000; // Use the port specified in the environment variable PORT, or default to port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
