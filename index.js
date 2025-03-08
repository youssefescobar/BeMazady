require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./models/User');
const Item = require('./models/Item');
const Auction = require('./models/Auction');
const Bid = require('./models/Bid');
const Payment = require('./models/Payment');
const Notification = require('./models/Notifaction');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

