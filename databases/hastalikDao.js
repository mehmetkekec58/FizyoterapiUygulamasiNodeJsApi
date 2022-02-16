const constMessage = require("../constants/messages")

const pool = require('./dataBaseConfig/postgreSql');

const errorResult = require('../result/errorResult');
const successDataResult = require('../result/successDataResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');


var HastalikDao = {
    async getAll() {
        let sql = "SELECT * FROM hastaliklar";
        try {
            const hastaliklar = (await pool.query(sql)).rows;
            //  const loginUser = await entityRepositoryBase.birParametreyeGoreGetirme("users","email",UserDto.email)
            //  console.log(hastaliklar)
            //  console.log(hastaliklar.find(p=>p.id == 1))  
            if (hastaliklar.length > 0) {
                return new successDataResult(hastaliklar, constMessage.hastaliklarlistelendi);
            } else {
                return new errorResult(constMessage.hastaliklarGetirilemedi);
            }
        } catch (error) {
            return new errorDataResult(error, constMessage.BirSeylerYanlisGitti);
        }
    },
    async getById(id) {
        let sql = "SELECT * FROM hastaliklar WHERE id='" + id + "'";
        try {
            const getByIdHastalik = (await pool.query(sql)).rows;
            if (getByIdHastalik.length > 0) {
                return new successDataResult(getByIdHastalik, constMessage.hastaliklarlistelendi);
            } else {
                return new errorDataResult(error, constMessage.hastalikGetirilemedi);
            }
        } catch (error) {
            return new errorDataResult(error, constMessage.BirSeylerYanlisGitti);
        }
    },
    async add(hastalik){
        let sql = "INSERT INTO hastaliklar (name, aciklama, photo_url) VALUES ('"+hastalik.name+"', '"+hastalik.aciklama+"', '"+hastalik.photoUrl+"')";
        try {
           
            const hastalikAdd = (await pool.query(sql)).rowCount
        //  console.log(hastalikAdd)
       //     console.log(hastalikAdd)
            if (hastalikAdd > 0) {
                return new successResult(constMessage.hastalikEklendi);
            }else{
            return new errorResult(constMessage.hastalikEklenemedi);
        }

        } catch (error) {
            return new errorDataResult(error, constMessage.BirSeylerYanlisGitti);
        }
    }
}
module.exports = HastalikDao