const router = require("express").Router();
// require the Mongoose model we created for merchandise
let Merchandise = require("../models/merchandise.model");
import { isAuth, isAdmin } from "../util";

// getting the existing merchandises in the database
router.route("/").get((req, res) => {
  Merchandise.find()
    .then((merchandises) => res.json(merchandises))
    .catch((err) =>
      res.status(400).json("Database GET Merchandise Error: " + err)
    );
});

// fetch a specific merchandise by document ID
router.route("/:id").get((req, res) => {
  Merchandise.findById(req.params.id)
    .then((merchandise) => res.json(merchandise))
    .catch((err) =>
      res
        .status(400)
        .json("fetch merchandise " + req.params.id + " err: " + err)
    );
});

// adding a new merchandise to database
router.post("/", async (req, res) => {
  // Create a new Document using the new cat's name and store it in database
  const merchandise = new Merchandise({
    Item_Name: req.body.Item_Name,
    Item_Code: req.body.Item_Code,
    Item_Category: req.body.Item_Category,
    Item_Color: req.body.Item_Color,
    Item_Quantity: req.body.Item_Quantity,
    Item_Price: req.body.Item_Price,
    Fabric_Content: req.body.Fabric_Content,
    Description: req.body.Description,
    Special_Offer: req.body.Special_Offer,
    Item_img: req.body.Item_img,
    short_name: req.body.short_name,
    new_arrive: req.body.new_arrive,
    no_of_images: req.body.no_of_images,
  });
  const newItem = await merchandise.save();
  if (newItem) {
    return res
      .status(201)
      .send({ message: "New Product Created", data: newItem });
  }
  return res.status(500).send({ message: " Error in Creating Product." });
});

// update a specific merchandise by document ID
router.put("/:id", async (req, res) => {
  const itemID = req.params.id;
  const item = await Merchandise.findById(itemID);
  if (item) {
    item.Item_Name = req.body.Item_Name;
    item.Item_Code = req.body.Item_Code;
    item.Item_Category = req.body.Item_Category;
    item.Item_Color = req.body.Item_Color;
    item.Item_Quantity = Number(req.body.Item_Quantity);
    item.Item_Price = Number(req.body.Item_Price);
    item.Fabric_Content = req.body.Fabric_Content;
    item.Description = req.body.Description;
    item.Item_img = req.body.Item_img;
    item.short_name = req.body.short_name;
    item.new_arrive = req.body.new_arrive;
    item.no_of_images = Number(req.body.no_of_images);
    const updatedItem = await item.save();
    if (updatedItem) {
      return res
        .status(200)
        .send({ message: "Product Updated", data: updatedItem });
    }
  }
  return res.status(500).send({ message: " Error in Updating Product." });
});

// delete a specific merchandise by document ID
router.delete("/:id", async (req, res) => {
  const deletedItem = await Merchandise.findById(req.params.id);
  if (deletedItem) {
    await deletedItem.remove();
    res.send({ message: "Product Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
});

module.exports = router;
