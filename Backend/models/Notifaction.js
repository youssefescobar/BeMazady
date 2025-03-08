const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // FK to User
    auction: { type: mongoose.Schema.Types.ObjectId, ref: 'Auction', required: false }, // FK to Auction
    message: { type: String, required: true },
    type: { type: String, enum: ['bid_update', 'auction_end', 'payment_received'], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', NotificationSchema);
