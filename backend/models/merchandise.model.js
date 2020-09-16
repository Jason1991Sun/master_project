const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const merchandiseSchema = new Schema(
  {
    Item_ID: { type: String, required: true },
    Item_Name: { type: String, required: true },
    Item_Code: { type: String, required: true },
    Item_Category: { type: String, required: true },
    Item_Color: { type: String, required: true },
    Item_Quantity: { type: Number, required: true },
    Item_Price: { type: Number, required: true },
    Fabric_Content: { type: String, required: true },
    Description: { type: String, required: true },
    Special_Offer: { type: String, required: true },
    Item_img: { type: String, required: true },
    Fabric_Content: { type: String, required: true },
    short_name: { type: String, required: true },
    new_arrive: { type: String, required: true },
    no_of_images: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Merchandise = mongoose.model("Merchandise", merchandiseSchema);

module.exports = Merchandise;
