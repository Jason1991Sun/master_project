const router = require('express').Router();
// require the Mongoose model we created for merchandise
let Merchandise = require('../models/merchandise.model');

// getting the existing merchandises in the database
router.route('/').get((req, res) => {
    Merchandise.find()
        .then(merchandises => res.json(merchandises))
        .catch(err => res.status(400).json('Database GET Merchandise Error: ' + err));
});

// adding a new merchandise to database
router.route('/add').post((req, res) => {
    // get the new cat's name from the HTTP post request
    const Item_ID = req.body.Item_ID;
    const Item_Name = req.body.Item_Name;
    const Item_Code = req.body.Item_Code;
    const Item_Category = req.body.Item_Category;
    const Item_Color = req.body.Item_Color;
    const Item_Quantity = Number(req.body.Item_Quantity);
    const Item_Price = Number(req.body.Item_Price);
    const Fabric_Content = req.body.Fabric_Content;
    const Description = req.body.Description;
    const Special_Offer = req.body.Special_Offer;
    const Item_img = req.body.Item_img;

    // Create a new Document using the new cat's name and store it in database
    const newMerchandise = new Merchandise({
        Item_ID,
        Item_Name,
        Item_Code,
        Item_Category,
        Item_Color,
        Item_Quantity,
        Item_Price,
        Fabric_Content,
        Description,
        Special_Offer,
        Item_img
    });
    newMerchandise.save()
        .then(() => res.json('new merchandise added!'))
        .catch(err => res.status(400).json('Database add new Merchandise Error: ' + err));
});

// fetch a specific merchandise by document ID
router.route('/:id').get((req, res) => {
    Merchandise.findById(req.params.id)
        .then(merchandise => res.json(merchandise))
        .catch(err => res.status(400).json('fetch merchandise ' + req.params.id + ' err: ' + err));
});

// update a specific merchandise by document ID
router.route('/update/:id').post((req, res) => {
   Merchandise.findById(req.params.id)
       .then(merchandise => {
           merchandise.Item_ID = req.body.Item_ID;
           merchandise.Item_Name = req.body.Item_Name;
           merchandise.Item_Code = req.body.Item_Code;
           merchandise.Item_Category = req.body.Item_Category;
           merchandise.Item_Color = req.body.Item_Color;
           merchandise.Item_Quantity = Number(req.body.Item_Quantity);
           merchandise.Item_Price = Number(req.body.Item_Price);
           merchandise.Fabric_Content = req.body.Fabric_Content;
           merchandise.Description = req.body.Description;
           merchandise.Special_Offer = req.body.Special_Offer;
           merchandise.Item_img = req.body.Item_img;

           merchandise.save()
               .then(() => res.json('merchandise ' + req.params.id + ' has been updated'))
               .catch(err => res.status(400).json('merchandise update error: ' + err));
       })
       .catch(err => res.status(400).json('fetch merchandise ' + req.params.id + ' err: ' + err));
});

// delete a specific merchandise by document ID
router.route('/:id').delete((req, res) => {
    
});

module.exports = router;