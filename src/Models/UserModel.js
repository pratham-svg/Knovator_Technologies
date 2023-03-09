//______________________ Import or Require Modules ________________________________
const mongooose = require('mongoose')

const UserSchema = new mongooose.Schema({ 
   Title : {
    type : String,
    required : true,
    enum : ["Mr", "Mrs", "Miss"]
   },
   FirstName : {
    type : String,
    require : true,
    trim : true
   },
   LastName : {
    type : String,
    require : true,
    trim : true
   },
   Email : {
    type : String,
    unique : true,
    required : true
   },
   Password : {
       type : String,
       required : true
   }
}
, {timestamps: true})

//__________________________ Exporting User Schema ___________________________________________

module.exports = new mongooose.model('User' ,UserSchema)