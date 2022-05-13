/**
 * Define the model
 */
 // Create the User Schema

 const mongoose = require("mongoose");
 const userSchema = new mongoose.Schema({

/**
 * 
 * _id, name, email, linkedlnProfile,type, address
 * 
 */

name : {
    type : String,
    required : true
},
email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    uppercase : true
},
userType : {
    type : String,
    required : true,
    default : "STUDENTS"
}, 
password : {
    type : String,
    required : true,
    lowercase : true,
    uppercase : true

},

_id : {
    type : mongoose.isValidObjectId,
required : true
},
 linkdlnProfile : {
     type : String,
     require : true
 },
  type : {
   type: (STUDENT | ADMIN), 
   required : true  
  }, 
adrress : {
    type : mongoose.isValidObjectId,
    required  : true
} 


 })

 // pls if can free check the  code