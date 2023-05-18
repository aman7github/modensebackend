
const express = require("express")
const { Wishlistmodel } = require("../model/Women.model")
const wishapp = express.Router()

wishapp.post("/add",async(req,res)=>{

try{

 const women = new Wishlistmodel(req.body)
 await women.save()
 //await Wishlistmodel.insertMany(req.body)
 res.status(200).send({"msg":"new women data is added"})


}catch(err){
    res.status(400).send({"msg":err.message})
}
})


wishapp.get("/get",async(req,res)=>{
  
    const category = req.query.category
    const sort = req.query.sort
    const order = req.query.order
    const brand = req.query.brand
   
    var customcategory;
  
 if(category==undefined){
    customcategory={}
 }else{
    customcategory={
        "category":category
    }
}


var customsort;

  if(sort==undefined){
     customsort={}
  }else if(sort=="price"){
    if(order=="asc"){
    customsort={
        "price":+1
    }
  }else if(order=="desc"){
    customsort={
        "price":-1
    }
  }
}

var custombrand;

if(brand==undefined){
    custombrand={}
}else{
    custombrand={
        "Title":brand
    }
}

  console.log(sort,order,customsort,customcategory)



try{
 
    const data = await Wishlistmodel.find({$and:[customcategory,custombrand]}).sort(customsort)
  
  res.status(200).send({"msg":data})

}catch(err){
    res.status(400).send({"msg":err.message})
}

})


wishapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
try{
  //await Wishlistmodel.deleteMany()  // if you want delete all data at once
 await Wishlistmodel.findByIdAndDelete({_id:id})
 res.status(200).send({"msg":"data is deleted"})
}catch(err){
    res.status(200).send({"msg":err.message}) 
}
})



module.exports={
    wishapp
}