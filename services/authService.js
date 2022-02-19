const User = require("../models/user")

const authDao = require("../databases/authDao")

const tokenHelper = require("../helper/tokenHelper")
const passwordHash2 = require("../helper/passwordHashHelper")

const errorResult = require("../result/errorResult")

const constMessage = require("../constants/messages")
const defaultValue = require('../constants/defaultValue')
const successResult = require("../result/successResult")
const errorDataResult = require("../result/errorDataResult")

var authService = {
    async login(userDto) {
        if (degerlerVarMi(userDto)) {
            const auth = await authDao.login(userDto)
            if (auth.success) {
                if (await passwordDogrulamaIslemi(userDto.password, auth.data.password))
                    return await tokenOlusmaIslemleri(auth.data)
                else
                    return new errorResult(constMessage.sifreYanlis)
            } else {
                return auth.message;
            }
        } else
            return new errorResult(constMessage.bosAlanBirakmayin);

        // kontrol fonksiyonları
        async function tokenOlusmaIslemleri(params) {
            return await tokenHelper.tokenCreate(params);
        }
        async function passwordDogrulamaIslemi(userPass, hashedPassword) {
            return await passwordHash2.passwordDogrula(userPass, hashedPassword)
        }
        async function degerlerVarMi(body) {
            if (!body.email && !body.password)
                return true;
            else
                return false;

        }
        async function rules([rules]) {
            rules.forEach(e => {
                if (!e.success)
                    return new errorDataResult(e.data, e.message);
            });
                return new successResult();


            
        }


    },
    async register(user) {
        if (degerlerVarMi(user)) {
            return await authDao.register(new User(user.userName, user.firstName, user.lastName,
                await passwordHash2.passwordHash(user.password), user.age, user.email, defaultValue.defaultPhotoUrl, user.aboutMe))
        }
        async function degerlerVarMi(body) {
            if (!body.userName && !body.firstName && !body.lastName && !body.password && !body.age && !body.email && !body.aboutMe)
                return true;
            else
                return false;
        }
    },

}
module.exports = authService