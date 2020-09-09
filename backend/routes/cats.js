const router = require('express').Router();
// require the Mongoose model we created for cat
let Cat = require('../models/cat.model');

// getting the existing cats in the database
router.route('/').get((req, res) => {
    Cat.find()
        .then(cats => res.json(cats))
        .catch(err => res.status(400).json('Database Get Cat Error: ' + err));
});

// adding a new cat to database
router.route('/add').post((req, res) => {
    // get the new cat's name from the HTTP post request
    const cat_Name = req.body.cat_Name;
    // Create a new Document using the new cat's name and store it in database
    const newCat = new Cat({cat_Name});
    newCat.save()
        .then(() => res.json('new cat added!'))
        .catch(err => res.status(400).json('Database Add Cat Error: ' + err));
});

module.exports = router;