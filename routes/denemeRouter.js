const router = require('express').Router();


router.get("/",(req,res)=>{


 res.status(500).json("fonksiyon deneme sayfası")

  
})
module.exports=router