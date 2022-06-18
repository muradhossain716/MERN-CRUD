const express=require('express');
const mongoose=require('mongoose')
const route=express.Router();
const UserSchema=require('../modules/Schema');
const User= new mongoose.model('User',UserSchema);

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
  route.put('/:id',async(req,res)=>{
    User.findOneAndUpdate({_id:req.params.id},req.body,(err,place)=>{
      res.send(place)
    })
  })

route.delete('/:id',async(req,res)=>{
  User.deleteOne({_id:req.params.id},()=>{
    console.log('updated')
  })
  
})


module.exports=route;