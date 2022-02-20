const jwt = require('jsonwebtoken')

const Token = require('../models/token')
const errorDataResult = require('../result/errorDataResult')
const successDataResult = require('../result/successDataResult')
const errorResult = require('../result/errorResult')

const constMessage = require("../constants/messages")
const defaultValue = require("../constants/defaultValue")



const tokenHelper = {
    async tokenCreate(user) {
        
        let exp = Math.floor(Date.now() / 1000) + (60 * 60);
        var token = jwt.sign({ Expiration: exp, user: user }, defaultValue.secretkey);
        if (token) {
            return new successDataResult(new Token(token, exp), constMessage.tokenOlusturuldu);
        }
        return new errorResult(constMessage.tokenOlusturmaBasarisiz);

    },
    tokenDogrula(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader !== undefined) {
            const bearerToken = bearerHeader.split(' ')[1];
            req.token = bearerToken;
            next();
        } else {
            res.status(403).json(new errorResult(constMessage.tokenYok)) 
        }
    },
    async jwtDogrulama(token) {
        try {
            const decoded = jwt.verify(token, defaultValue.secretkey);
      //  console.log(decoded)
        if (decoded) {
            return new successDataResult(decoded, constMessage.tokenDogrulandi)
        } else {
            return new errorResult(constMessage.tokenDogrulanamadi)
        }
        } catch (error) {
            return new errorResult(constMessage.tokenDogrulanamadi)
        }
        
    }
}
module.exports = tokenHelper