
const express = require("express")
require("dotenv").config()
const { connection } = require("./db/db")
const { userroute } = require("./routes/User.route")
const cors = require("cors")
const { womenapp } = require("./routes/Women.route")
const { menapp } = require("./routes/Men.route")
const { wishapp } = require("./routes/Wishlist.route")
const { orderapp } = require("./routes/Order.route")
const { middleware } = require("./middleware/middleware")
const { cartapp } = require("./routes/Cart.route")
const { addressroute } = require("./routes/Address.route")


const app = express()
app.use(express.json())
app.use(cors())
app.use("/user",userroute)
app.use("/women",womenapp)
app.use("/men",menapp)
app.use("/wishlist",wishapp)
app.use("/cart",cartapp)


app.use(middleware)
app.use("/order",orderapp)
app.use("/address",addressroute)










app.listen(process.env.port,async()=>{

try{
     await connection
     console.log("server connected")
}
catch(err){
    console.log(err)
}

})