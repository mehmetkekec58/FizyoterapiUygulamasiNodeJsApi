const HastalikDao = require("../databases/hastalikDao")

var hastalikService={
   async getAll(){
   return  HastalikDao.getAll()
    }
}
module.exports=hastalikService