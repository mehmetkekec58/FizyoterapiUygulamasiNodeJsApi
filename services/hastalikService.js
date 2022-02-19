const constMessage = require("../constants/messages");
const HastalikDao = require("../databases/hastalikDao");

const errorResult = require("../result/errorResult");

var hastalikService = {
    async getAll() {
        return await HastalikDao.getAll();
    },
    async getById(id) {
        if (degerlerVarMi(id))
            return await HastalikDao.getById(id.id);
        else
            return new errorResult(constMessage.bosAlanBirakmayin);

         function degerlerVarMi(query) {
            if (query.id)
                return true;
            else
                return false;
        }
    },
    async add(hastalik) {
        if (degerlerVarMi(hastalik)) 
            return await HastalikDao.add(hastalik);
           else
            return new errorResult(constMessage.bosAlanBirakmayin);
           
         function degerlerVarMi(body) {
            if (body.name && body.aciklama && body.photoUrl)
                return true;
            else
                return false;
    }
},
}
module.exports = hastalikService