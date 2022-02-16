const entityRepositoryBase = require('../databases/entityRepositoryBase');

const router = require('express').Router();


router.get("/",(req,res)=>{
 const aa =  entityRepositoryBase.silme("users", "email='hey13dwswdaddadaasddadadaddwdadadadddadgrfarsae7setdwe4dww@hey.com'");
 console.log(aa)
    res.status(500).json(aa)
})
module.exports=router