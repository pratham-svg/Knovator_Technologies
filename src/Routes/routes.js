//__________________________ Import or Require Module ___________________________________________
const express = require('express')
const routes = express.Router()
const {createUser , logInUser } = require('../Controllers/UserController')

//__________________________ get api : for Test ___________________________________________
routes.get('/demo' , (req , res)=> { 
    return res.status.send({ status : true , msg : " Working Properly "})
})

//__________________________ post api : Create User ___________________________________________
routes.post('/CreateUser' , createUser)
//__________________________ post api : Login User ___________________________________________
routes.post('/logIn' , logInUser)

module.exports = routes