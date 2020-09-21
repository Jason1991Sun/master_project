const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// use populate() method later to get the merchandises in the shopping cart
const shoppingCartSchema = new Schema({
    items: [
        {
            quantity: { type: Number, required: true }, 
            merchandise: { type: Schema.Types.ObjectId, ref: "Merchandise" }
        }
    ]
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;