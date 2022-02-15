const jwt = require('jsonwebtoken')

const User = require('../models/user')

const errorDataResult = require('../result/errorDataResult')
const successDataResult = require('../result/successDataResult')

const constMessage = require("../constants/messages")
const defaultValue = require("../constants/defaultValue")
const successResult = require('../result/successResult')



const tokenHelper = {
    async tokenCreate(User) {
        await jwt.sign({ User }, defaultValue.secretkey, (err, token) => {
            if (err) {
                return new errorResult(constMessage.TokenOlusturmaBasarisiz)
            }
            return new successDataResult(token, constMessage.TokenOlusturuldu);
        })
    },

    tokenDogrulu(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== undefined) {
            const bearerToken = bearerHeader.split(' ')[1];
            req.token = bearerToken
            next()
        } else {
            return new errorDataResult(403, constMessage.YetkisizYok)
        }
    },
    async jwtDogrulama(req, res) {
        await jwt.verify(req.token, defaultValue.secretkey, (err, authData) => {
            if (err) {
                return new errorDataResult(403, constMessage.TokenDogrulanamadi)
            } else {
                return new successDataResult(authData,constMessage.TokenDogrulandi)
            }})
        }}
module.exports = tokenHelper