
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
 

},{
    versionKey:false
})

const Womenmodel = mongoose.model("womendata",schema)

const Menmodel = mongoose.model("mendata",schema)




module.exports={
    Womenmodel,Menmodel
}