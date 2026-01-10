require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require("cors");

//Handling cors policy issues
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));


app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/auth", authRoute);   //Rest API route
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

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