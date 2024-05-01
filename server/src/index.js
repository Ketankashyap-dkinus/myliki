const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('<h1><center>WELCOME TO MYLIKI SERVER.......</br> version 1.0.0 </center> </H1>'); 
});

// Define other routes as needed...

// Start the server
const PORT = process.env.PORT || 3000; // Use the port specified in the environment variable PORT, or default to port 3000


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
