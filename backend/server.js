import express from "express";
import cat from "./category";
import config from "./config";

// importing the middleware cors, https://www.npmjs.com/package/cors
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// Declare the express app the port
const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware and enable json parsing
app.use(cors());
app.use(express.json());

// getting the mongoDB connection string
const uri = config.MONGODB_URL;
mongoose.set("useFindAndModify", false);

// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

app.get("/", (req, res) => {
  res.send("Hello Word!!");
});

app.get("/api/categories", (req, res) => {
  res.send(cat.categories);
});

const catsRouter = require("./routes/cats");
const merchandisesRouter = require("./routes/merchandises");
const usersRouter = require("./routes/users");

app.use("/cats", catsRouter);
app.use("/merchandises", merchandisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
