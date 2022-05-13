const mongoose = require("mongoose");
const constants = require("../utils/constants")

const addressSchema = new mongoose.Schema({


// _id(objectID), lat, long(float) 

_id : {
    type : mongoose.isValidObjectId,
    required : true
}, 
lat : {
    type : parseFloat,
    required : true
},
long : {
    type : parseFloat,
    required : true
}

})
