const constMessage = require('../constants/messages');
const Hastalik = require('../models/hastalik');
const errorResult = require('../result/errorResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');
const successDataResult = require('../result/successDataResult');
const hastalikService = require('../services/hastalikService');
const router = require('express').Router();


router.get("/getall", async (req, res) => {

    try {
        const hastalikGetAll = await hastalikService.getAll()
        if (hastalikGetAll.success) {
            res.status(200).json(hastalikGetAll)
        } else {
            res.status(500).json(hastalikGetAll)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error,constMessage.birSeylerYanlisGitti))
    }


})

router.get("/getbyid", async (req, res) => {
    //console.log(req.query.id)
    try {
        if (req.query.id !== undefined && req.query.id!=="") {
            const getByIdHastalik = await hastalikService.getById(req.query.id)
            if (getByIdHastalik.success) {
                res.status(200).json(new successDataResult(getByIdHastalik.data, constMessage.hastalikGetirildi))
            } else {
                res.status(500).json(new errorResult(getByIdHastalik.message))
            } 
        }else{
            res.status(500).json(new errorResult(constMessage.bosAlanBirakmayin))
        }
       
        
    } catch (error) {
        res.status(500).json(new errorResult(constMessage.BirSeylerYanlisGitti))
    }
})

router.post("/add", async (req, res) => {
    try {
   //  console.log(req.body) 
     if ((req.body.name !==undefined && req.body.name!=="") &&( req.body.aciklama !==undefined && req.body.aciklama!=="") && (req.body.photoUrl!=undefined && req.body.photoUrl!=="")) {
       
            const addHastalik = await hastalikService.add(await new Hastalik(1,req.body.name,req.body.aciklama,req.body.photoUrl))
            console.log(addHastalik)
        if (addHastalik.success) {
            res.status(200).json(new successResult(constMessage.hastalikEklendi))
        } else {
            res.status(500).json(new errorResult(addHastalik.message))
        }  
      }else{
        res.status(500).json(new errorResult(constMessage.bosAlanBirakmayin))
      }
     
} catch (error) {
    res.status(500).json(new errorResult(constMessage.BirSeylerYanlisGitti))
    }
})


module.exports = router