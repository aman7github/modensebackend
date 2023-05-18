

const express = require("express")
const { Ordermodel } = require("../model/Order.model")
const orderapp = express.Router()
const jwt = require("jsonwebtoken")

orderapp.post("/add",async(req,res)=>{

try{

 const women = new Ordermodel(req.body)
 await women.save()
 //await Ordermodel.insertMany(req.body)
 res.status(200).send({"msg":"new women data is added"})


}catch(err){
    res.status(400).send({"msg":err.message})
}
})


orderapp.get("/get",async(req,res)=>{
  
    const token = req.headers.authorization

try{
    if(token){
       const decoded = jwt.verify(token, "batman")
       console.log(decoded)
      if(decoded){
        const data = await Ordermodel.find({"userID":decoded.userID})
        res.status(200).send({"msg":data})
      }else{
        res.status(400).send({"msg":"token and key are not decoded"})
      }
    }else{
        res.status(400).send({"msg":"token not found please login first"})
    }
}catch(err){
    res.status(400).send({"msg":err.message})
}

})





module.exports={
    orderapp
}