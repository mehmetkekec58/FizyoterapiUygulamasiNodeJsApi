const User = require('../models/user')
const UserDto = require("../models/dto/userDto");

const constMessage = require("../constants/messages")

const pool = require('./dataBaseConfig/postgreSql');
//const entityRepositoryBase = require('./entityRepositoryBase');

const errorResult = require('../result/errorResult');
const successDataResult = require('../result/successDataResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');


const authDao = {
    async login(UserDto) {
        let sql = "SELECT * FROM users WHERE email = '" + UserDto.email + "'";
        try {
            const loginUser = await (await pool.query(sql)).rows;
            //  const loginUser = await entityRepositoryBase.birParametreyeGoreGetirme("users","email",UserDto.email)
            if (loginUser.length > 0) {

                return new successDataResult(loginUser[0], constMessage.KullaniciBulundu);

            } else {
                return new errorResult(constMessage.KullaniciBulunamadi);
            }

        } catch (error) {
            return new errorResult(constMessage.BirSeylerYanlisGitti);
        }

    },
    async register(user) {
        //  let tabloName ="users"
        //let tabloKolonlari=["email", "first_name", "last_name", "username", "age", "password", "profile_photo_url", "about_me"];
        //let values =[user.email,user.firstName,user.lastName,user.userName,user.age,user.password,user.profilePhotoUrl,user.aboutMe] 
        let sql = "INSERT INTO Users (email, first_name, last_name, username, age, password, profile_photo_url, about_me) VALUES ('" + user.email + "','" + user.firstName + "', '" + user.lastName + "', '" + user.userName + "', '" + user.age + "', '" + user.password + "', '" + user.profilePhotoUrl + "', '" + user.aboutMe + "')";
        // let sql = await sqlMetinOlusturucu.addSqlMetinUret(tabloName,tabloKolonlari,values)
        try {
            const registerUser = await (await pool.query(sql)).rowCount
            //console.log(registerUser)
            //const loginUser =await entityRepositoryBase.cokluParametreyleEkleme(tabloName,tabloKolonlari,values);
            if (registerUser > 0) {
                return new successResult(constMessage.BasariylaKaydoldun);
            }else{
            return new errorResult(constMessage.KaydolmaBasarisiz);
        }
        } catch (error) {
            return new errorResult(error.detail);
        }

    }
}
module.exports = authDao