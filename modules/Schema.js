const mongoose =require ('mongoose')
const {Schema}=mongoose;
const MySchema=new Schema({
    name:{ type:String},
    age:{ type:Number},
    id:{ type:Number}

});

module.exports=mongoose.model('user', MySchema);