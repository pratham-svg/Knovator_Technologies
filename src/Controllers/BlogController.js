//______________________ Import or Require Modules ________________________________

const BlogModel = require('../Models/BlogModel')
const UserModel = require('../Models/UserModel')
const { } = require('../Validation/validation')
const errorhandler = require('../ErrorHendler/errorhandler')
//______________________ post api : Create Blog ________________________________

const createBlog = async (req , res)=>{
  try{
    const data = req.body
    if (Object.keys(data).length == 0) {
        return res
          .status(400)
          .send({ status: false, message: "All Keys are Mandatory" });
      }
      const NewBlog = await BlogModel.create(data) 
      res.status(201).send({ msg: NewBlog });
  }catch(err){
    return errorhandler(err , res)
  }
}

module.exports = {createBlog }