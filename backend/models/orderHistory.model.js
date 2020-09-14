const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// use populate() method later to get the merchandises in the shopping cart
const orderHistorySchema = new Schema({
    orders: [{type: Schema.Types.ObjectId, ref: "Merchandise"}]
});

const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);

module.exports = OrderHistory;