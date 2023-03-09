//______________________ Import or Require Modules ________________________________

const BlogModel = require('../Models/BlogModel')
const UserModel = require('../Models/UserModel')
const { isValidObjectId } = require('../Validation/validation')
const errorhandler = require('../ErrorHendler/errorhandler')
const { findById } = require('../Models/BlogModel')
//______________________ post api : Create Blog ________________________________

const createBlog = async (req , res)=>{
  try{
    const data = req.body
    const UserId = req.params.UserId
    if(UserId){
        data['UserId'] = UserId
    }
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

//______________________ PUT api : Update Blog ________________________________

const UpdateBlog = async (req , res )=>{
    try{
        let data = req.body
        let blogId = req.params.blogId;
        let UserId = req.params.UserId;
        if (!blogId) {
            return res
              .status(400)
              .send({ status: false, message: "Blog Id is Mandatory" });
          }
        if (Object.keys(data).length == 0) {
            return res.status(400).send({
              status: false,
              message: "Please Enter the Valid Key and Value to Update",
            });
          }
        const deleteBlog = await BlogModel.findById(blogId)  
        if (deleteBlog.IsDeleted == true) {
            return res
              .status(404)
              .send({ status: false, msg: "Blog already Deleted" });
          }
          let updatedBlog = await BlogModel.findOneAndUpdate(
            { _id: blogId },
            {
              $set: { ...data },
            },
            { new: true, upsert: true }
          );
          return res.status(200).send({ status: true, data: updatedBlog });   

    }catch(err){
        return errorhandler(err , res)
    }
}

//______________________ Delete api : Delete Blog ________________________________
 
const DeleteBlog = async (req , res )=> {
    try{
        let blogId = req.params.blogId;
        let UserId = req.params.UserId;

        let blogFound = await BlogModel.findById(blogId);
        if (!blogFound || blogFound.IsDeleted==true ) {
            return res.status(400).send({
              status: false,
              msg: "No blog exists with this Blog Id, please provide another one",
            });
          }
          await BlogModel.findOneAndUpdate(
            { _id: blogId },
            { $set: { IsDeleted: true }},
            { new: true }
          );
          return res.status(200).send({
            status: true,
            msg: "Your Blog has been successfully deleted",
          });

    }catch(err){
      return errorhandler(err , res)
    }
}

//__________________________ get api : Get Blog ___________________________________________

const GetBlogs = async (req,res)=>{
    try{
        
        const data = await BlogModel.find({ IsDeleted : false})
        return res.status(200).send({ status : true , data : data})
      
    }catch(err){
        return errorhandler(err , res)
    }
}

const GetBlogsById = async (req , res)=> {
    try{
      const blogId = req.params.blogId
      const blog = await BlogModel.findById(blogId)
      if(blog.IsDeleted == true){
        return res.status(400).send({ status : false , msg : "this blog is deleted"})
      }
      return res.status(200).send({ status : true , data : blog })
    }catch(err){
        return errorhandler(err , res)
    }
}

module.exports = {createBlog , UpdateBlog , DeleteBlog , GetBlogs , GetBlogsById }