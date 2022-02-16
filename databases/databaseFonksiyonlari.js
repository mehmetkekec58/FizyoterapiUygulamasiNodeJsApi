/*const pool = require('./dataBaseConfig/postgreSql');

const databaseFonksiyonlari={
    async getFonksiyonu(sql) {
        return  await (await pool.query(sql)).rows;
    },*/
    /*async findFonksiyonu(sql){
        return  await (await pool.query(sql)).rows;
    },
    async UpdateFonksiyonu(sql){
        
    },*/
    /*async deleteFonksiyonu(sql){
        try {
           console.log(await (await pool.query(sql),(err,result)=>{
               console.log(result)
           }))
            return await (await pool.query(sql))
        } catch (error) {
            return error.detail;
        }

    },
    async addFonksiyonu(sql){
        try {
           
       return await(await pool.query(sql)).command  
        } catch (error) {
            return error.detail;
        }
    
    }/*,
    async tabloDetail(sql){

    }*/

/*}
module.exports=databaseFonksiyonlari*/