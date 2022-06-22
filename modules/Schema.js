const mongoose =require ('mongoose')
const {Schema}=mongoose;
const MySchema=new Schema({
    name:{ type:String},
    age:{ type:String}

});

module.exports= new mongoose.model('user', MySchema);