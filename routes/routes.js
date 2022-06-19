const express=require('express');
const mongoose=require('mongoose')
const route=express.Router();
const UserSchema=require('../modules/Schema');
const User= new mongoose.model('User',UserSchema);
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
    let data=await User.findOne({_id: req.params.id})
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
route.post("/", async (req, res) => {
  try{
    const newUser = new User(req.body);
    await newUser.save()
    res.json({success:true,data:newUser})
  }
  catch(err){
    res.json({error:err})
  }
    
  });


  //post multiple
  route.post('/all',async(req,res)=>{
    try{
      await User.insertMany(req.body)
      res.json({success:true})
    }
    catch(err){
      res.json({error:err})
    }
  })
  route.put('/:id',async(req,res)=>{
    try{
      await User.findOneAndUpdate({_id:req.params.id},req.body,)
      res.json({success:true})
    }
    catch(err){
      res.json({error:err})
    }
   

  })

route.delete('/:id',async(req,res)=>{
  try{
    await User.deleteOne({_id:req.params.id})
    res.json({success:true})
  }
  catch(err){
    res.json({error:err})
  }
})


module.exports=route;