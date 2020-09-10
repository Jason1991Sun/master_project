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

module.exports = router;