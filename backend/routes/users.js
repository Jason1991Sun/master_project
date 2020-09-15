const router = require('express').Router();
// require the Mongoose model we created for user
let User = require('../models/user.model');
let ShoppingCart = require('../models/shoppingCart.model');
let OrderHistory = require('../models/orderHistory.model');

// getting the existing users in the database
router.route('/').get((req, res) => {
    if(req.body.username != null){
        User.findOne({username: req.body.username}, function(err, user){
            if(err) res.status(400).json('get specific user by username err: ' + err);
            else res.json(user);
        });
    }
    else if(req.body.email != null){
        User.findOne({email: req.body.email}, function(err, user){
            if(err) res.status(400).json('get specific user by email err: ' + err);
            else res.json(user);
        });
    }
    else{
        User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Database Get users Error: ' + err));
    }
});

// adding new user
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const additional_address = req.body.additional_address;
    const phone_number = req.body.phone_number;
    const profile_picture = req.body.profile_picture;
    // new user has empty shopping cart and empty order history
    let items = [];
    let orders = [];
    // create a new shopping cart for the new user
    const newShoppingCart = new ShoppingCart({
        items
    });

    newShoppingCart.save()
        .then(() => {
            // create a new order history for the new user
            const newOrderHistory = new OrderHistory({
                orders
            });

            newOrderHistory.save()
                .then(() => {
                    const newUser = new User({
                        username,
                        email,
                        password,
                        address,
                        additional_address,
                        phone_number,
                        profile_picture,
                        shopping_cart: newShoppingCart._id,
                        order_history: newOrderHistory._id
                    });

                    newUser.save()
                        .then(() => res.json('new user added!'))
                        .catch(err => res.status(400).json('Database Add User Error: ' + err));
                })
                .catch(err => {res.status(400).json('add new order history err: ' + err)});
        })
        .catch(err => res.status(400).json('Add new shopping cart error: ' + err));
});

//TODO: fetch a specific user
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('getting user by id err:' + err));
});

//TODO: update a specific user

//TODO: delete a specific user

module.exports = router;