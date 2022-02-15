const User = require("../models/user")
const UserDto = require("../models/dto/userDto")
const authDao = require("../databases/authDao")

var authService = {
    async login(UserDto){
    return await authDao.login(UserDto);
        
        
    },
    async register(User){
        return await authDao.register(User)
    }
}
module.exports = authService