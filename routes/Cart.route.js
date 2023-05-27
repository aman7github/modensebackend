


const express = require("express")
const { Cartmodel } = require("../model/Order.model")
const cartapp = express.Router()

cartapp.post("/add",async(req,res)=>{

try{
 
 const women = new Cartmodel(req.body)
 await women.save()
 //await Cartmodel.insertMany(req.body)
 res.status(200).send({"msg":"Item is added to Cart"})


}catch(err){
    res.status(400).send({"msg":"Item is already added to Cart"})
}

})


cartapp.get("/get",async(req,res)=>{
  
//     const category = req.query.category
//     const sort = req.query.sort
//     const order = req.query.order
//     const brand = req.query.brand
   
//     var customcategory;
  
//  if(category==undefined){
//     customcategory={}
//  }else{
//     customcategory={
//         "category":category
//     }
// }


// var customsort;

//   if(sort==undefined){
//      customsort={}
//   }else if(sort=="price"){
//     if(order=="asc"){
//     customsort={
//         "price":+1
//     }
//   }else if(order=="desc"){
//     customsort={
//         "price":-1
//     }
//   }
// }

// var custombrand;

// if(brand==undefined){
//     custombrand={}
// }else{
//     custombrand={
//         "Title":brand
//     }
// }


try{
    const data = await Cartmodel.find()
    res.status(200).send({"msg":data})
}catch(err){
    res.status(400).send({"msg":err.message})
}

})


cartapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
try{
  //await Cartmodel.deleteMany()  // if you want delete all data at once
 await Cartmodel.findByIdAndDelete({_id:id})
 const data = await Cartmodel.find()
 res.status(200).send({"msg":"data is deleted",'data':data})
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})



module.exports={
    cartapp
}