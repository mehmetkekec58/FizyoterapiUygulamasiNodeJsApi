const User = require('../models/user')

var authDao= {
    login: (User)=>{
        return "giriş yapıldı: "+ `${User.firstName} ${User.lastName}`;
        //console.log("giriş yapıldı: "+ isim)
    },
    register: (User)=>{
        return "Kayıt olundu: "+ `${User.firstName} ${User.lastName}`;
    }
}
    module.exports=authDao