const constMessage = require('../constants/messages');
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
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }


})

router.get("/getbyid", async (req, res) => {
    try {
        const getByIdHastalik = await hastalikService.getById(req.query)
        if (getByIdHastalik.success) {
            res.status(200).json(getByIdHastalik)
        } else {
            res.status(500).json(getByIdHastalik)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.post("/add", async (req, res) => {
    try {
        const addHastalik = await hastalikService.add(req.body)
        if (addHastalik.success) {
            res.status(200).json(addHastalik)
        } else {
            res.status(500).json(addHastalik)
        }

    } catch (error) {
  
        res.status(500).json(new errorDataResult(error,constMessage.birSeylerYanlisGitti))
    }
})

router.post("/update", async (req, res) => {
    try {
      
        const updateHastalik = await hastalikService.updateHastalik(req.body);

        if (updateHastalik.success) {
            res.status(200).json(updateHastalik)
        } else {
            res.status(500).json(updateHastalik)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.delete("/delete", async (req, res) => {
    try {
      
        const deleteHastalik = await hastalikService.deleteHastalik(req.query);

        if (deleteHastalik.success) {
            res.status(200).json(deleteHastalik)
        } else {
            res.status(500).json(deleteHastalik)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})


module.exports = router