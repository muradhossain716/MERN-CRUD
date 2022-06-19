const express=require('express');
const mongoose=require('mongoose')
const route=express.Router();
const UserSchema=require('../modules/Schema');
const User= new mongoose.model('User',UserSchema);
//get data 
route.get('/',async(req,res)=>{
  try{
    const result= await User.find({})
    res.status(200).json(result)
  }catch(err){
    res.send(err)
  }
 
  
});
//get one by ids
route.get('/:id',async(req,res)=>{
  try{
    let data=await User.findOne({_id: req.params.id})
    // res.json({success:true,data:data})
    res.status(200).json(data)
  }
  catch(err){
    // res.json({success:false,data:err})
    res.status(200).json(err)
  }
  
})
// route.get('get/',(req,res)=>{
//   console.log('get data')
// })
//post one data
route.post("/", async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
      
        });
      } else {
        res.status(200).json({
          message: "Todo was inserted successfully!",
        });
      }
    });
  });


  //post multiple
  route.post('/all',async(req,res)=>{
    await User.insertMany(req.body,(err)=>{
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
      
        });
      } else {
        res.status(200).json({
          message: "Todo was inserted successfully!",
        });
      }
    })
  })
  route.put('/:id',async(req,res)=>{
    User.findOneAndUpdate({_id:req.params.id},req.body,(err,place)=>{
      res.send(place)
    })
  })

route.delete('/:id',async(req,res)=>{
  User.deleteOne({_id:req.params.id},(err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Todo was deleted successfully!",
      });
    }})
  
})


module.exports=route;