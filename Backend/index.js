const dotenv = require('dotenv');
const dbConnect = require('./config/DBconnection')
const express = require('express');
const AuthRoutes = require('./routes/AuthRoute')

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;


// Database connection
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', AuthRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, ()=>{
    console.log("server online on port:", PORT)
})



