var router = require('express').Router();

const User = require("../models/user")
const authService = require('../services/authService')


router.get("/login",async (req,res)=>{
 const ne= await new User(2,"mehmetkekec","Mehmet","Kekeç",34);
  tt=await authService.login(ne)
    res.status(200).json(tt)
})

module.exports=router;