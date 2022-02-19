const constMessage = require("../constants/messages")

const pool = require('./dataBaseConfig/postgreSql');
//const entityRepositoryBase = require('./entityRepositoryBase');

const errorResult = require('../result/errorResult');
const successDataResult = require('../result/successDataResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');


const authDao = {
    async login(userDto) {
        let sql = "SELECT * FROM users WHERE email = $1";
        try {
            const loginUser = (await pool.query(sql, [userDto.email])).rows;
            if (loginUser.length > 0) {

                return new successDataResult(loginUser[0], constMessage.kullaniciBulundu);

            } else {

                return new errorResult(constMessage.sifreVeyaEpostaYanlis);
            }

        } catch (error) {
            return new errorResult(error.detail);
        }

    },
    async register(user) {
        let values = [user.email, user.firstName, user.lastName, user.userName, user.age, user.password, user.profilePhotoUrl, user.aboutMe]
        // let sql = "INSERT INTO Users (email, first_name, last_name, username, age, password, profile_photo_url, about_me) VALUES ('" + user.email + "','" + user.firstName + "', '" + user.lastName + "', '" + user.userName + "', '" + user.age + "', '" + user.password + "', '" + user.profilePhotoUrl + "', '" + user.aboutMe + "')";
        let sql = "INSERT INTO Users (email, first_name, last_name, username, age, password, profile_photo_url, about_me) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
        try {
            const registerUser = (await pool.query(sql, values)).rowCount
            if (registerUser > 0) {
                return new successResult(constMessage.basariylaKaydoldun);
            } else {
                return new errorResult(constMessage.kaydolmaBasarisiz);
            }
        } catch (error) {
            return new errorResult(error.detail);
        }

    }
}
module.exports = authDao