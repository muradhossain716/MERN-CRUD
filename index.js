const express=require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const routes=require('./routes/routes');
const app=express();
app.use(cors());
mongoose.connect('mongodb://localhost:27017/users',()=>{
  console.log('db connected')
})
// app.use(express.json())
 app.use('/',routes)


function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({ error: err });
  }
app.listen(5000,()=>{
    console.log("server connected Alhamdulillah")
})