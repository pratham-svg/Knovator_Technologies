//______________________ Import or Require Modules ________________________________

const UserModel = require('../Models/UserModel')
const jwt = require("jsonwebtoken");
const errorHandle = require('../ErrorHendler/errorhandler')
const { isValidName , isValidEmail , isValidPassword  } = require('../Validation/validation')

//______________________ post api : Create User ________________________________

const createUser = async (req ,res)=>{
    try{
        const data = req.body  
        const { Title , FirstName , LastName , Email , Password }  = data
        if(!(isValidName(FirstName) && isValidName(LastName) && isValidEmail(Email)) ){
            return res.status(400).send({ status : false , msg : "Please Enter Valid Name, Email id and Password"})
        }
        const newUser = await UserModel.create(data)
        return res.status(201).send({ status : true , msg : newUser }) 

    }catch(err){
      return errorHandle(err, res)
    }
}

//______________________ post api : Login User ________________________________

const logInUser = async (req, res)=> {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      if (!(isValidEmail(email))) {
        return res.status(400).send({ status: false, msg: "Email is required" });
      }
  
      if (!(password)) {
        return res
          .status(400)
          .send({ status: false, msg: "password is required" });
      }
  
      const User = await UserModel.findOne({ email, password });
      if (!User) {
        return res
          .status(401)
          .send({ status: false, msg: "Invalid login credentials" });
      }
      const token = jwt.sign(
        { User: User._id.toString() },
        "Pratham"
      );
      return res.status(200).send({ status: true,
        message: "User login successfull",
      data : { userId: User._id, token: token },});
    } catch (err) {
      return errorHandle(err, res)
    }
  };


module.exports = {createUser ,  logInUser }