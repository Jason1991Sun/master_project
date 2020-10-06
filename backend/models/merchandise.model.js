const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const merchandiseSchema = new Schema(
  {
    Item_Name: { type: String, required: true },
    Item_Code: { type: String, required: true },
    Item_Category: { type: String, required: true },
    Item_Color: { type: String, required: true },
    // this quantity means how many we have in stock
    Item_Quantity: { type: Number, default: 0, required: true },
    Item_Price: { type: Number, default: 0, required: true },
    Fabric_Content: { type: String, required: true },
    Description: { type: String, required: true },
    Item_img: { type: String },
    short_name: { type: String, required: true },
    new_arrive: { type: String },
    no_of_images: { type: Number, default: 0, required: true },
  },
  {
    timestamps: true,
  }
);

const Merchandise = mongoose.model("Merchandise", merchandiseSchema);

module.exports = Merchandise;
