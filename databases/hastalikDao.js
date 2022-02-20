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
            if (hastaliklar.length > 0) {
                return new successDataResult(hastaliklar, constMessage.hastaliklarlistelendi);
            } else {
                return new errorResult(constMessage.hastaliklarListelenemedi);
            }
        } catch (error) {
            return new errorDataResult(error.detail);
        }
    },
    async getById(id) {
        let sql = "SELECT * FROM hastaliklar WHERE id= $1";
        try {
            const getByIdHastalik = (await pool.query(sql, [id])).rows;
            if (getByIdHastalik.length > 0) {
                return new successDataResult(getByIdHastalik, constMessage.hastalikGetirildi);
            } else {
                return new errorDataResult(constMessage.hastalikGetirilemedi);
            }
        } catch (error) {
            return new errorDataResult(error.detail);
        }
    },
    async add(hastalik) {
        let values = [hastalik.name, hastalik.aciklama, hastalik.photoUrl];
        let sql = "INSERT INTO hastaliklar (name, aciklama, photo_url) VALUES ($1, $2, $3)";
        try {
            const hastalikAdd = (await pool.query(sql, values)).rowCount
            if (hastalikAdd > 0) {
                return new successResult(constMessage.hastalikEklendi);
            } else {
                return new errorResult(constMessage.hastalikEklenemedi);
            }
        } catch (error) {
            return new errorDataResult(error.detail);
        }
    },
    async updateHastalik(hastalik) {
        let values = [hastalik.name, hastalik.aciklama, hastalik.photoUrl, hastalik.id];
        let sql = "UPDATE hastaliklar SET name = $1, aciklama = $2 , photo_url = $3 WHERE id = $4";

        try {
            const updataHastalik = (await pool.query(sql, values)).rowCount
            if (updataHastalik > 0) {
                return new successResult(constMessage.hastalikGuncellendi);
            } else {
                return new errorResult(constMessage.hastalikGuncellenemedi);
            }
        } catch (error) {
            return new errorResult(error.detail);
        }
    },

    async deleteHastalik(hastalikId) {

        let sql = "DELETE FROM hastaliklar WHERE id = $1";

        try {
            const deleteHastalik = (await pool.query(sql, [hastalikId])).rowCount
          
            if (deleteHastalik > 0) {
                return new successResult(constMessage.hastalikSilindi);
            } else {
                return new errorResult(constMessage.hastalikSilinemedi);
            }
        } catch (error) {
            return new errorResult(error.detail);
        }
    },
}

module.exports = HastalikDao