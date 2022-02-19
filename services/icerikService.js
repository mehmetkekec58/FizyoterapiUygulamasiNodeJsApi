const constMessage = require('../constants/messages');
const icerikDao = require('../databases/icerikDao');

const errorResult = require('../result/errorResult');

var icerikService ={
    async getAll(hastalikId){
        if (degerlerVarMi(hastalikId))
        return await icerikDao.getAll(hastalikId.id)
        else
        return new errorResult(constMessage.bosAlanBirakmayin);

        function degerlerVarMi(query) {
            if (query.id)
                return true;
            else
                return false;
    }
},
 async addIcerik(icerik){
    if (degerlerVarMi(icerik))
        return await icerikDao.addIcerik(icerik)
        else
        return new errorResult(constMessage.bosAlanBirakmayin);

        function degerlerVarMi(body) {
            if (body.hastalikId && body.gifUrl && body.aciklama && body.siralama)
                return true;
            else
                return false;
    }
 },
 async updateIcerik(icerik){
    if (degerlerVarMi(icerik))
    return await icerikDao.updateIcerik(icerik)
    else
    return new errorResult(constMessage.bosAlanBirakmayin);

    function degerlerVarMi(body) {
        if (body.id && body.hastalikId && body.gifUrl && body.aciklama && body.siralama)
            return true;
        else
            return false;
 }
},
async deleteIcerik(icerik){
    if (degerlerVarMi(icerik))
    return await icerikDao.deleteIcerik(icerik.id)
    else
    return new errorResult(constMessage.bosAlanBirakmayin);

    function degerlerVarMi(query) {
        if (query.id)
            return true;
        else
            return false;
 }
}
}
module.exports=icerikService