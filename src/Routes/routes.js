//__________________________ Import or Require Module ___________________________________________
const express = require('express')
const routes = express.Router()
const {createUser , logInUser } = require('../Controllers/UserController')
const { createBlog , UpdateBlog ,DeleteBlog , GetBlogs , GetBlogsById } = require('../Controllers/BlogController')
const { authentication , authorization } = require('../Middleware/Authentication')
//__________________________ get api : for Test ___________________________________________
routes.get('/demo' , (req , res)=> { 
    return res.status.send({ status : true , msg : " Working Properly "})
})

//__________________________ post api : Create User ___________________________________________
routes.post('/CreateUser' , createUser)
//__________________________ post api : Login User ___________________________________________
routes.post('/logIn' , logInUser)

//__________________________ post api : Create Blog ___________________________________________
routes.post('/CreateBlog/:UserId' , authentication , createBlog)
//__________________________ put api : Update Blog ___________________________________________
routes.put('/UpdateBlog/:blogId/:UserId' ,authentication , authorization , UpdateBlog)
//__________________________ Delete api : Delete Blog ___________________________________________
routes.delete('/DeleteBlog/:blogId/:UserId' ,authentication , authorization , DeleteBlog)
//__________________________ Get api : get All Blog ___________________________________________
routes.get('/GetBlogs/:UserId' , authentication , GetBlogs )
//__________________________ Get api : get Blog By Id ___________________________________________
routes.get('/GetBlogsById/:blogId/:UserId' , authentication , authorization , GetBlogsById )


module.exports = routes