// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files (e.g., images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Import routes from routes.js
const routes = require('./routes');
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
