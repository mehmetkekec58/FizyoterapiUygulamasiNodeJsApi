const constMessage = require('../constants/messages');
const errorResult = require('../result/errorResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');
const successDataResult = require('../result/successDataResult');
const icerikService = require('../services/icerikService');
const router = require('express').Router();
const { tokenDogrula, jwtDogrulama } = require('../helper/tokenHelper');

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

router.post("/add",tokenDogrula, async (req, res) => {
    try {
        const tokenDogrulama = await jwtDogrulama(req.token)
        if (tokenDogrulama.success) {

            if (tokenDogrulama.data.user.yetki == "admin") {
        const addIcerik = await icerikService.addIcerik(req.body)

        if (addIcerik.success) 
            res.status(200).json(addIcerik)
         else 
            res.status(500).json(addIcerik)
        } else
        res.status(403).json(new errorResult(constMessage.yetkinizYok))

} else
    res.status(401).json(new errorResult(constMessage.tokenDogrulanamadi))

    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.post("/update",tokenDogrula, async (req, res) => {
    try {
        const tokenDogrulama = await jwtDogrulama(req.token)
        if (tokenDogrulama.success) {

            if (tokenDogrulama.data.user.yetki == "admin") {
        const updateIcerik = await icerikService.updateIcerik(req.body)

        if (updateIcerik.success) 
            res.status(200).json(updateIcerik)
         else 
            res.status(500).json(updateIcerik)
        } else
        res.status(403).json(new errorResult(constMessage.yetkinizYok))

} else
    res.status(401).json(new errorResult(constMessage.tokenDogrulanamadi))

    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.delete("/delete",tokenDogrula, async (req, res) => {
    try {
        const tokenDogrulama = await jwtDogrulama(req.token)
        if (tokenDogrulama.success) {

            if (tokenDogrulama.data.user.yetki == "admin") {
        const deleteIcerik = await icerikService.deleteIcerik(req.query)

        if (deleteIcerik.success) 
            res.status(200).json(deleteIcerik)
         else 
            res.status(500).json(deleteIcerik)
        } else
        res.status(403).json(new errorResult(constMessage.yetkinizYok))

} else
    res.status(401).json(new errorResult(constMessage.tokenDogrulanamadi))

    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})
module.exports = router