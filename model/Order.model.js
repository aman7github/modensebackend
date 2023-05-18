

const mongoose = require("mongoose")

const schema = mongoose.Schema({

    "Title": String,
    "Title_URL": String,
     "arr":[String],
    "Image": String,
    "Name": String,
    "Sprice": String,
    "price": Number,
    "prdstores": String,
    "category":String,
    "userID":String,
 

},{
    versionKey:false
})

const Ordermodel = mongoose.model("userorderdata",schema)


module.exports={
Ordermodel
}