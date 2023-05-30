
const mongoose = require("mongoose")

const schema = mongoose.Schema({

    "Title": String,
    "arr":[String],
    "Image": String,
    "Name": String,
    "Sprice": String,
    "price": Number,
    "category":String,
 

},{
    versionKey:false
})

const Menmodel = mongoose.model("mendata",schema)






module.exports={
    Menmodel
}