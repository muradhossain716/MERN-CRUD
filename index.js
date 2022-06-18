const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/routes')
const app=express();
mongoose.connect('mongodb://localhost:27017/users',()=>{
    console.log('databse connectd')
});

app.use(express.json())
app.use('/',routes)

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({ error: err });
  }
app.listen(6000,()=>{
    console.log("server connected Alhamdulillah")
})