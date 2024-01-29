const express = require('express');
 const app= express();
 const path = require('path');
 const productroutes = require('./routes/productRoutes.js')
 

 app.get('/',(req,res,next)=>{
    res.send("hello")
 })


 app.use('/prod',productroutes);

 









 app.listen("3000",()=>{
    console.log("Server listening at the port number 3000");
 })