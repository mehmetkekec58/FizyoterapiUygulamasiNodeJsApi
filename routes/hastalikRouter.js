const Hastalik = require('../models/hastalik');
const hastalikService = require('../services/hastalikService');
const router = require('express').Router();


router.get("/getlist", async (req,res)=>{
    const ee = hastalikService.getAll()
    res.status(200).json(ee)
})
module.exports=router