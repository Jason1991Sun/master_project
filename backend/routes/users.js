const router = require("express").Router();
// require the Mongoose model we created for user
let User = require("../models/user.model");
let ShoppingCart = require("../models/shoppingCart.model");
let OrderHistory = require("../models/orderHistory.model");
import { getToken } from "../util";

// adding routes for signin, password field is left undefined intentionally
router.route("/signin").post((req, res) => {
  // get a specific user by username
  if (req.body.username != null) {
    User.findOne({ username: req.body.username }, function (err, user) {
      if (err)
        res.status(400).send("no user found by that username err: " + err);
      else if (user.password === req.body.password) {
        res.send({
          _id: user._id,
          username: user.username,
          email: user.email,
          phone_number: user.phone_number,
          first_name: user.first_name,
          last_name: user.last_name,
          country: user.country,
          street_address: user.street_address,
          suburb: user.suburb,
          state: user.state,
          post_code: user.post_code,

          shopping_cart: user.shopping_cart,
          order_history: user.order_history,
          token: getToken(user),
        });
      } else {
        res.status(401).send("wrong password");
      }
    });
  }
  // get a specific user by email
  else if (req.body.email != null) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) res.status(400).send("no user found by that email err: " + err);
      else if (user.password === req.body.password) {
        res.send({
          _id: user._id,
          username: user.username,
          email: user.email,
          phone_number: user.phone_number,
          first_name: user.first_name,
          last_name: user.last_name,
          country: user.country,
          street_address: user.street_address,
          suburb: user.suburb,
          state: user.state,
          post_code: user.post_code,

          shopping_cart: user.shopping_cart,
          order_history: user.order_history,
          token: getToken(user),
        });
      } else {
        res.status(401).send("wrong password");
      }
    });
  } else {
    res.json("invalid username/email input");
  }
});

// getting the existing users in the database, for debugging only
router.route("/").post((req, res) => {
  // get a specific user by username
  if (req.body.username != null) {
    User.findOne({ username: req.body.username }, function (err, user) {
      if (err)
        res.status(400).json("get specific user by username err: " + err);
      else res.json(user);
    });
  }
  // get a specific user by email
  else if (req.body.email != null) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) res.status(400).json("get specific user by email err: " + err);
      else res.json(user);
    });
  } else {
    res.json("No user found with that username/email");
  }
});

// adding new user
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phone_number = req.body.phone_number;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const country = req.body.country;
  const street_address = req.body.street_address;
  const suburb = req.body.suburb;
  const state = req.body.state;
  const post_code = req.body.post_code;

  // new user has empty shopping cart and empty order history
  let items = [];
  let orders = [];
  // create a new shopping cart for the new user
  const newShoppingCart = new ShoppingCart({
    items,
  });

  newShoppingCart
    .save()
    .then(() => {
      // create a new order history for the new user
      const newOrderHistory = new OrderHistory({
        orders,
      });

      newOrderHistory
        .save()
        .then(() => {
          const newUser = new User({
            username,
            email,
            password,
            phone_number,
            first_name,
            last_name,
            country,
            street_address,
            suburb,
            state,
            post_code,
            shopping_cart: newShoppingCart._id,
            order_history: newOrderHistory._id,
          });

          newUser
            .save()
            .then(() => res.json("new user added!" + newUser))
            .catch((err) =>
              res.status(400).json("Database Add User Error: " + err)
            );
        })
        .catch((err) => {
          res.status(400).json("add new order history err: " + err);
        });
    })
    .catch((err) =>
      res.status(400).json("Add new shopping cart error: " + err)
    );
});

// fetch a specific user by id, for debugging only
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("getting user by id err:" + err));
});

// update a specific user using post request body
router.route("/update").post((req, res) => {
  // copy the request body to a temporary storage
  let temp = { ...req.body };
  // get all the fields that needed to be updated (all the fields other than the email)
  delete temp["email"];
  User.findOneAndUpdate(
    { email: req.body.email },
    { $set: temp },
    { new: true },
    function (err, user) {
      if (err) res.status(400).json("update user err: " + err);
      let updatedUser = user.toJSON();
      // should not reveal user's password at all times
      delete updatedUser["password"];
      updatedUser.token = getToken(user);
      res.json(updatedUser);
    }
  );
});

// delete a specific user using delete request body
router.route("/").delete((req, res) => {
  User.findOneAndDelete({ username: req.body.username }, function (err, user) {
    if (err) res.status(400).json("delete user error: " + err);
    res.json("user " + req.body.username + " deleted");
  });
});

module.exports = router;
