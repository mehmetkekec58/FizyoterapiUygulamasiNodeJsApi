const icerikDao = require('../databases/icerikDao')

var icerikService ={
    getAll(hastalikId){
        return icerikDao.getAll(hastalikId)
    }
}
module.exports=icerikService