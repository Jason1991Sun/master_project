const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// example to create a model/Schema for cat
const merchandiseSchema = new Schema({
    item_ID: {type: String, required: true},
    Item_Name: {type: String, required: true},
    Item_Code: {type: String, required: true},
    Item_Category: {type: String, required: true},
    Item_Color: {type: String, required: true},
    Item_Quantity: {type: Number, required: true},
    Item_Price: {type: Number, required: true},
    Fabric_Content: {type: String, required: true},
    Description: {type: String, required: true},
    Special_Offer: {type: String, required: true},
    item_img: {type: String, required: true}
}, {
    timestamps: true
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;