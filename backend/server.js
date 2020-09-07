import express from "express";
import data from "./data";
import cat from "./cat";

const app = express();

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
app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:5000`);
});
