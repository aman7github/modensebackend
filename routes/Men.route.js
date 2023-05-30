
const express = require("express")
const { Menmodel } = require("../model/Mens.model")

const menapp = express.Router()

menapp.post("/add",async(req,res)=>{

try{

//  const women = new Menmodel(req.body)
//  await women.save()
 await Menmodel.insertMany(req.body)
 res.status(200).send({"msg":"new women data is added"})


}catch(err){
    res.status(400).send({"msg":err.message})
}
})


menapp.get("/get",async(req,res)=>{
  
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
 
    const data = await Menmodel.find({$and:[customcategory,custombrand]}).sort(customsort)
  
  res.status(200).send({"msg":data})

}catch(err){
    res.status(400).send({"msg":err.message})
}

})


menapp.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
const newdata = await Menmodel.findByIdAndUpdate({_id:id},req.body)
 res.status(200).send({"msg":newdata})
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})


menapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
try{
  //await Menmodel.deleteMany()  // if you want delete all data at once
 await Menmodel.findByIdAndDelete({_id:id})
 res.status(200).send({"msg":"data is deleted"})
}catch(err){
    res.status(200).send({"msg":err.message}) 
}
})



module.exports={
   menapp
}