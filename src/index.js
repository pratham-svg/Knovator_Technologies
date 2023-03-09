//__________________________ Import : Necessary Package and Modules ___________________________________________
const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const url = 'mongodb+srv://Pratham_Panchariya:shree79766@cluster0.yd3rrae.mongodb.net/knovator_technologies'
const app = express()
const routes  =  express.Router()
const port = process.env.PORT || 3000
// app.use(app().multer())
app.use(express.json());

//__________________________ Connection : MongoDB Cluster ___________________________________________
mongoose.connect(url ).then(()=> console.log('Mongo Db is Connected'))
app.use('/' , routes)


//__________________________ Listen : Port ___________________________________________

app.listen(port ,()=> { console.log(`Port is Connected at ${port}`) })