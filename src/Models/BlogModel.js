//<----------------------< Importing : Packages >---------------------->//

const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

//<----------------------< Create : BlogSchema >----------------------->//

const blogSchema = new mongoose.Schema({
    title : { 
        type : String,
        require : [true, "Please Enter the Title"],
        trim : true
    },
    body : {
        type : String,
        required : [true, "Please write Your Blog"],
        trim : true
    },
    UserId :{
        type : objectId,
        ref : 'User',
        required : [true, "Please provide the UserId"]
    },
    Status : {
        type : Boolean,
        default : false
    },
    CreatedBy : {
        type : String,
        required : [true, "Please provide the Name Of Created"]
    },
    IsDeleted : {
        type : Boolean,
        default : false
    },
    Address : {
        type : String,
        required : [true, "Please provide Address"]
    }
} ,{ timestamps: true });

//<----------------------< Exports : BlogModel >----------------------->//

module.exports = mongoose.model('Blog' , blogSchema )
