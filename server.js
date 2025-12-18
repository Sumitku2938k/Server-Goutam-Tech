const express = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db');


app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/auth", router);   //Rest API route

// Connect to the database
// connectDB();

// Start the server
connectDB().then(() => { // Ensure DB is connected before starting server
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}).catch((err) => {
    console.error('Failed to start server:', err);
});