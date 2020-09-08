const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// example to create a model/Schema for cat
const catSchema = new Schema({
    cat_Name: {
        type: String,
        required: true,
        unique: true,
        // trim is for cutting off spaces the user types
        trim: true,
        minlength: 3}
}, {
    timestamps: true
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;