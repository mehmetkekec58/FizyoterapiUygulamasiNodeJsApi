const jwt = require('jsonwebtoken')

const User = require('../models/user')
const Token = require('../models/token')
const errorDataResult = require('../result/errorDataResult')
const successDataResult = require('../result/successDataResult')
const errorResult = require('../result/errorResult')

const constMessage = require("../constants/messages")
const defaultValue = require("../constants/defaultValue")



const tokenHelper = {
    async tokenCreate(User) {
        let exp = Math.floor(Date.now() / 1000) + (60 * 60);
        var token = await jwt.sign({ Expiration: exp, user: User[0] }, defaultValue.secretkey);
        if (token) {
            return new successDataResult(new Token(token, exp), constMessage.tokenOlusturuldu);
        }
        return new errorResult(constMessage.tokenOlusturmaBasarisiz);

    },
    tokenDogrula(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== undefined) {
            const bearerToken = bearerHeader.split(' ')[1];
            req.token = bearerToken
            next()
        } else {
            return new errorDataResult(403, constMessage.yetkinizYok)
        }
    },
    async jwtDogrulama() {
        var decoded = await jwt.verify(token, defaultValue.secretkey);
        if (decoded) {
            return new successDataResult(decoded.user, constMessage.tokenDogrulandi)
        } else {
            return new errorDataResult(403, constMessage.tokenDogrulanamadi)
        }
    }
}
module.exports = tokenHelper