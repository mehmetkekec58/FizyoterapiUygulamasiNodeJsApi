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


module.exports = router