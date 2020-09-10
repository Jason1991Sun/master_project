import express from "express";
import data from "./data";
import cat from "./category";

// importing the middleware cors, https://www.npmjs.com/package/cors
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

// Declare the express app the port
const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware and enable json parsing
app.use(cors());
app.use(express.json());

// getting the mongoDB connection string
const uri = process.env.ATLAS_URI;
// Connect to MongoDB Atlas
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .catch(err => console.log(err));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established")
});

app.get("/", (req, res) => {
  res.send("Hello Word!!");
});

app.get("/api/categories", (req, res) => {
  res.send(cat.categories);
});

app.get("/api/items/:id", (req, res) => {
  const itemID = req.params.id;
  const product = data.items.find((x) => x.item_ID === itemID);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product Not Found." });
});

app.get("/api/items", (req, res) => {
  res.send(data.items);
});

const catsRouter = require('./routes/cats');
const merchandisesRouter = require('./routes/merchandises');

app.use('/cats', catsRouter);
app.use('/merchandises', merchandisesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
