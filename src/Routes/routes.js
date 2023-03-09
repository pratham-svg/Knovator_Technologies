const express = require('express')
const routes = express.Router()

routes.get('/demo' , (req , res)=> { 
    return res.status.send({ status : true , msg : " data is  added "})
})


module.exports = routes