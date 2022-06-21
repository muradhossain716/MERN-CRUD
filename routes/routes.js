const express=require('express');
const mongoose=require('mongoose')
const route=express.Router();
const User=require('../modules/Schema');

//get data 
route.get('/',async(req,res)=>{
  try{
    const result= await User.find({})
    res.json(result)
  }catch(err){
    res.send(err)
  }
 
  
});
//get one by ids
route.get('/:id',async(req,res)=>{
  try{
    let data=await User.findOne({id: req.params.id})
    // res.json({success:true,data:data})
    res.json({data:data})
  }
  catch(err){
    // res.json({success:false,data:err})
    res.json({error:err})
  }
  
})
// route.get('get/',(req,res)=>{
//   console.log('get data')
// })
//post one data
route.post("/add", async (req, res) => {
  
  try{
    const newUser = new User(req.body);
    console.log(req.body, newUser,'add data')
    await newUser.save()
    res.json({success:true,data:newUser})
  }
  catch(err){
    res.json({error:err})
  }
    
  });


  //post multiple
  // route.post('/all',async(req,res)=>{
  //   try{
  //     await User.insertMany(req.body)
  //     res.json({success:true})
  //   }
  //   catch(err){
  //     res.json({error:err})
  //   }
  // })
  route.put('/update/:id',async(req,res)=>{
    try{
      await User.findOneAndUpdate({id:req.params.id},req.body,)
      console.log(id,req.body,' id req body updated')
      res.json({success:true})
    }
    catch(err){
      res.json({error:err})
    }
   

  })

route.delete('/delete/:id',async(req,res)=>{
  try{
    await User.deleteOne({id:req.params.id})
    res.json({success:true})
  }
  catch(err){
    res.json({error:err})
  }
})


module.exports=route;