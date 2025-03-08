const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    item_status: { type: String, required: true }, 
    description: { type: String, required: true },
    item_pictures: [{ type: String, required: true }],
    category: { type: String, required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // FK to User
    review: { type: String, required: false }
});

// Delete auctions when an item is deleted
ItemSchema.pre('remove', async function (next) {
    await mongoose.model('Auction').deleteMany({ item: this._id });
    next();
});

module.exports = mongoose.model('Item', ItemSchema);
