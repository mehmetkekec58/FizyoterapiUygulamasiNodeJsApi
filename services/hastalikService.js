const HastalikDao = require("../databases/hastalikDao")

var hastalikService={
   async getAll(){
    
   return await  HastalikDao.getAll();
    },

    async getById(id){
        return await HastalikDao.getById(id)
    },
    async add(hastalik){
        return await HastalikDao.add(hastalik)
    }
}
module.exports=hastalikService