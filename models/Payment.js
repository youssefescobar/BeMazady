const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // FK to User
    auction: { type: mongoose.Schema.Types.ObjectId, ref: 'Auction', required: true }, // FK to Auction
    bidId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bid', required: true }, // FK to Bid (ensures payment is linked to a bid)
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },

});

module.exports = mongoose.model('Payment', PaymentSchema);
