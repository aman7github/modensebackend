
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "name":{type:String,required:true},
    "mobile":{type:Number,required:true},
    "pincode":{type:Number,required:true},
    "city":{type:String,required:true},
    "building":{type:String,required:true},
    "street":{type:String,required:true},
    "landmark":String,
    "userID":String
},{
    versionKey:false
})

const AddressModel = mongoose.model("userAddress",schema)


module.exports={
    AddressModel
}