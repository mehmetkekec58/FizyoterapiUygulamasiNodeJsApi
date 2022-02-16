const constMessage = require("../constants/messages")

const pool = require('./dataBaseConfig/postgreSql');

const errorResult = require('../result/errorResult');
const successDataResult = require('../result/successDataResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');

var icerikler ={
   async getAll(hastalikId) { 
       let sql = "SELECT * FROM icerikler WHERE hastalik_id='" + hastalikId + "'";
       try {
        const getList = (await pool.query(sql)).rows;
        if (getList.length > 0) {
            return new successDataResult(getList, constMessage.iceriklerListelendi);
        } else {
            return new errorDataResult(error, constMessage.icerikListelemeBasarisiz);
        }
    } catch (error) {
        return new errorDataResult(error, constMessage.BirSeylerYanlisGitti);
    }
    }
}
module.exports=icerikler