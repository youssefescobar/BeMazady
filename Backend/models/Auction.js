const mongoose = require('mongoose');

const AuctionSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }, // FK to Item
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // FK to User
    startPrice: { type: Number, required: true },
    endPrice: { type: Number, required: false },
    currentPrice: { type: Number, default: 0 },
    bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }], // FK to Bid
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' }
});

// Prevent deletion if auction has bids
AuctionSchema.pre('remove', async function (next) {
    const bidCount = await mongoose.model('Bid').countDocuments({ auction: this._id });
    if (bidCount > 0) {
        return next(new Error("Cannot delete auction with active bids"));
    }
    next();
});

module.exports = mongoose.model('Auction', AuctionSchema);
