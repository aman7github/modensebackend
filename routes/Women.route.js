
const express = require("express")
const { Womenmodel } = require("../model/Women.model")
const womenapp = express.Router()

womenapp.post("/add",async(req,res)=>{

try{

 const women = new Womenmodel(req.body)
 await women.save()
 //await Womenmodel.insertMany(req.body)
 res.status(200).send({"msg":"new women data is added"})


}catch(err){
    res.status(400).send({"msg":err.message})
}
})


womenapp.get("/get",async(req,res)=>{
  
    const category = req.query.category
    const sort = req.query.sort
    const order = req.query.order
    const brand = req.query.brand
    const page = req.query.page
   
    var customcategory;
  
 if(category==undefined  ){
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

if(brand==undefined ){
    custombrand={}
}else{
    custombrand={
        "Title":brand
    }
}

  console.log(category,brand)



try{
    const totaldata = await Womenmodel.find({$and:[customcategory,custombrand]})
    const data = await Womenmodel.find({$and:[customcategory,custombrand]}).sort(customsort).skip((page-1)*12).limit(12)
  
  res.status(200).send({"msg":data,"totalPages":totaldata.length})

}catch(err){
    res.status(400).send({"msg":err.message})
}

})


 
womenapp.patch("/update/:id",async(req,res)=>{
   const {id} = req.params
 
   try{
         await Womenmodel.findByIdAndUpdate({_id:id},req.body) 
         res.status(200).send({"msg":"data updated"})

   }catch(err){
         res.status(400).send({"msg":err})
   }



})


womenapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
try{
  //await Womenmodel.deleteMany()  // if you want delete all data at once
 await Womenmodel.findByIdAndDelete({_id:id})
 res.status(200).send({"msg":"data is deleted"})
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})



module.exports={
    womenapp
}