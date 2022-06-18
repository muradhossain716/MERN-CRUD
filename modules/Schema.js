const mongoose =require ('mongoose')
const MySchema=new mongoose.Schema({
    name:String,
    username:String
});

module.exports=MySchema;