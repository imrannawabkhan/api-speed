const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer

// Define a route that returns "Hello, World!"
app.get('/api/hello', (req, res) => {
    res.status(200).json({ message: 'Hello World! From Node Js' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});