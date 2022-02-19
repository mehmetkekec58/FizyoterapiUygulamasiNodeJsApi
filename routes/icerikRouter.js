const constMessage = require('../constants/messages');
const errorResult = require('../result/errorResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');
const successDataResult = require('../result/successDataResult');
const icerikService = require('../services/icerikService');
const router = require('express').Router();


router.get("/getbyhastalikid", async (req, res) => {
    try {

        const getByIdHastalikId = await icerikService.getAll(req.query)

        if (getByIdHastalikId.success) {
            res.status(200).json(getByIdHastalikId)
        } else {
            res.status(500).json(getByIdHastalikId)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
});

router.post("/add", async (req, res) => {
    try {
      
        const addIcerik = await icerikService.addIcerik(req.body)

        if (addIcerik.success) {
            res.status(200).json(addIcerik)
        } else {
            res.status(500).json(addIcerik)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.post("/update", async (req, res) => {
    try {
      
        const updateIcerik = await icerikService.updateIcerik(req.body)

        if (updateIcerik.success) {
            res.status(200).json(updateIcerik)
        } else {
            res.status(500).json(updateIcerik)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.delete("/delete", async (req, res) => {
    try {
      
        const deleteIcerik = await icerikService.deleteIcerik(req.query)

        if (deleteIcerik.success) {
            res.status(200).json(deleteIcerik)
        } else {
            res.status(500).json(deleteIcerik)
        }
    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})
module.exports = router