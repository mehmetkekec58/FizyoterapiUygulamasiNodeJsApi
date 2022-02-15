const User = require('../models/user')
const UserDto = require("../models/dto/userDto");

const constMessage = require("../constants/messages")

const token = require("../models/token");
const pool = require('./dataBaseConfig/postgreSql');
const errorResult = require('../result/errorResult');
const successDataResult = require('../result/successDataResult');


const authDao = {
    async login(UserDto) {
        let sql = "Select * From Users WHERE email='" + UserDto.email + "' AND password='" + UserDto.password + "'";
        const loginUser = await (await pool.query(sql)).rows

        if (loginUser.length > 0) {
            return new successDataResult(loginUser, constMessage.GirisBasarili);
        } else {
            return new errorResult(constMessage.KullaniciBulunamadi);
        }



    },
    async register(User) {
        return "Kayıt olundu: " + `${User.firstName} ${User.lastName}`;
    }
}
module.exports = authDao