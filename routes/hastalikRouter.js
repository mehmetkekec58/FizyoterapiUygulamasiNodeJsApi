const constMessage = require('../constants/messages');
const errorResult = require('../result/errorResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');
const successDataResult = require('../result/successDataResult');
const hastalikService = require('../services/hastalikService');
const router = require('express').Router();
const { tokenDogrula, jwtDogrulama } = require('../helper/tokenHelper');

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

router.post("/add", tokenDogrula, async (req, res) => {
    try {
        const tokenDogrulama = await jwtDogrulama(req.token)
        if (tokenDogrulama.success) {

            if (tokenDogrulama.data.user.yetki == "admin") {

                const addHastalik = await hastalikService.add(req.body)

                if (addHastalik.success)
                    res.status(200).json(addHastalik)
                else
                    res.status(500).json(addHastalik)

            } else
                res.status(403).json(new errorResult(constMessage.yetkinizYok))

        } else
            res.status(401).json(new errorResult(constMessage.tokenDogrulanamadi))



    } catch (error) {

        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.post("/update", tokenDogrula, async (req, res) => {
    try {
        const tokenDogrulama = await jwtDogrulama(req.token)
        if (tokenDogrulama.success) {

            if (tokenDogrulama.data.user.yetki == "admin") {
                const updateHastalik = await hastalikService.updateHastalik(req.body);

                if (updateHastalik.success)
                    res.status(200).json(updateHastalik)
                else
                    res.status(500).json(updateHastalik)

            } else
                res.status(403).json(new errorResult(constMessage.yetkinizYok))

        } else
            res.status(401).json(new errorResult(constMessage.tokenDogrulanamadi))

    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})

router.delete("/delete", tokenDogrula, async (req, res) => {
    try {
        const tokenDogrulama = await jwtDogrulama(req.token)
        if (tokenDogrulama.success) {

            if (tokenDogrulama.data.user.yetki == "admin") {
                const deleteHastalik = await hastalikService.deleteHastalik(req.query);

                if (deleteHastalik.success)
                    res.status(200).json(deleteHastalik)
                else
                    res.status(500).json(deleteHastalik)

            } else
                res.status(403).json(new errorResult(constMessage.yetkinizYok))

        } else
            res.status(401).json(new errorResult(constMessage.tokenDogrulanamadi))


    } catch (error) {
        res.status(500).json(new errorDataResult(error, constMessage.birSeylerYanlisGitti))
    }
})


module.exports = router