const constMessage = require("../constants/messages")

const pool = require('./dataBaseConfig/postgreSql');

const errorResult = require('../result/errorResult');
const successDataResult = require('../result/successDataResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');

var icerikler ={
   async getAll(hastalikId) { 
       let sql = "SELECT * FROM icerikler WHERE hastalik_id= $1";
       try {

        const getList = (await pool.query(sql,[hastalikId])).rows;
    
        if (getList.length > 0) {
            return new successDataResult(getList, constMessage.iceriklerListelendi);
        } else {
            return new errorDataResult(constMessage.icerikListelemeBasarisiz);
        }
    } catch (error) {
        return new errorDataResult(error, constMessage.birSeylerYanlisGitti);
    }
    },
    async addİcerik(icerik){
        let values = [icerik.hastalikId,icerik.gifUrl,icerik.aciklama,icerik.siralama]
        
        let sql ="INSERT INTO icerikler (hastalik_id, gif_url, aciklama, siralama) VALUES ($1, $2, $3, $4)";
        try {
            const addİcerik = (await pool.query(sql, values)).rowCount
            if (addİcerik > 0) {
                return new successResult(constMessage.icerikEklendi);
            } else {
                return new errorResult(constMessage.icerikEklenemedi);
            }
        } catch (error) {
            return new errorResult(error.detail);
        }

    }
}
module.exports=icerikler