//__________________________ Import : Necessary Package and Modules ___________________________________________

const express = require("express");
const route=require('./routes/routes')
const mongoose = require("mongoose");
const app = express();
const port = process.env.port || 3000;
const url = 'mongodb+srv://Pratham_Panchariya:shree79766@cluster0.yd3rrae.mongodb.net/knovator_technologies'
app.use(express.json());

//__________________________ Connection : MongoDB Cluster ___________________________________________

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