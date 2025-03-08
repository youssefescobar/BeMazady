const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
    auction: { type: mongoose.Schema.Types.ObjectId, ref: 'Auction', required: true }, // FK to Auction
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // FK to User
    amount: { type: Number, required: true },
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: false }, // FK to Payment (optional, since not all bids may require payment immediately)
    bidTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bid', BidSchema);
