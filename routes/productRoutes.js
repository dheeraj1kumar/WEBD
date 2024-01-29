const express =require('express')

const router = express.Router();
const  {showProduct,createproduct} = require('../controller/productController')

router.get("/product/showall",showProduct)


router.get("/product/create",createproduct)


router.get("/product/update",(req,res)=>{
   res.send('update product');
})


router.get("/product/delete",(req,res)=>{
   res.send('delete product');
})

module.exports=router;