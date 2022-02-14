const User = require("../models/user")
const authDao=require("../dataBase/authDao")

  var authService = { 
      login: (User)=>{
   return authDao.login(User);
},
      register: (User)=>{
          return authDao.register(User)
      }
}
module.exports=authService