const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// use populate() method later to get the shopping cart and the order history
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // trim is for cutting off spaces the user types
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // trim is for cutting off spaces the user types
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill in a valid email address",
      ],
    },
    password: {
      // We should store passwords as Hash values, for this project, no real users are involved thus we will store plain text
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    country: {
      type: String,
    },
    street_address: {
      type: String,
    },
    suburb: {
      type: String,
    },
    state: {
      type: String,
    },
    post_code: {
      type: Number,
    },
    shopping_cart: {
      type: Schema.Types.ObjectId,
      ref: "ShoppingCart",
    },
    order_history: {
      type: Schema.Types.ObjectId,
      ref: "OrderHistory",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
