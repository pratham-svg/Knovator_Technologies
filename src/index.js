//__________________________ Import : Necessary Package and Modules ___________________________________________

const express = require("express");
const route=require('./routes/routes')
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.port || 11000;
const url = process.env.MONGODB
const multer = require('multer')
app.use(express.json());
app.use(multer().any())
//__________________________ Connection : MongoDB Cluster ___________________________________________
mongoose.set('strictQuery', true);
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

app.use("/",route)

//__________________________ Listen : Port ___________________________________________

app.listen(port, (req, res) => {
  console.log(`server is Running at ${port}`);
});