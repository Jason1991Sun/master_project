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

// fetch a specific cat by the document ID
router.route('/:id').get((req,res) => {
    Cat.findById(req.params.id)
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json('Database getting specific cat error: ' + err));
});

// delete a specific cat by the document ID
router.route('/:id').delete((req, res) => {
    Cat.findByIdAndDelete(req.params.id)
        .then(() => res.json('cat ' + req.params.id + ' has been removed'))
        .catch(err => res.status(400).json('Database remove specific cat error: ' + err));
});

// update a specific cat by the document ID
router.route('/update/:id').post((req, res) => {
    Cat.findById(req.params.id)
        .then(cat => {
            cat.cat_Name = req.body.cat_Name;
            cat.save()
                .then(() => res.json('Cat updated!'))
                .catch(err => res.status(400).json('Cat update Error: ' + err));
        })
        .catch(err => res.status(400).json('Database getting specific cat error: ' + err));
});

module.exports = router;