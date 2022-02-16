const User = require("../models/user")
const UserDto = require("../models/dto/userDto")

const authDao = require("../databases/authDao")

const tokenHelper = require("../helper/tokenHelper")
const passwordHash2 = require("../helper/passwordHashHelper")
const errorResult = require("../result/errorResult")

var authService = {
    async login(userDto) {
        const auth = await authDao.login(userDto)
        if (auth.success) {
            if ( await passwordDogrulamaIslemi(userDto.password,auth.data.password)) 
                 return await tokenOlusmaIslemleri(auth.data)
        } else {
            return new errorResult(auth.message);
        }    
       async function tokenOlusmaIslemleri(params) {
          return await tokenHelper.tokenCreate(params);
        }
        async function passwordDogrulamaIslemi(userPass,hashedPassword) {
           return await passwordHash2.passwordDogrula(userPass,hashedPassword)
        }


    },
    async register(user) {
        return await authDao.register(await new User(user.userName, user.firstName, user.lastName,
           await passwordHash2.passwordHash(user.password), user.age, user.email, user.profilePhotoUrl, user.aboutMe))
    }
}
module.exports = authService