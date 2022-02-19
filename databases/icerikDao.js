const constMessage = require("../constants/messages")

const pool = require('./dataBaseConfig/postgreSql');

const errorResult = require('../result/errorResult');
const successDataResult = require('../result/successDataResult');
const errorDataResult = require('../result/errorDataResult');
const successResult = require('../result/successResult');

var icerikler = {
    async getAll(hastalikId) {
        let sql = "SELECT * FROM icerikler WHERE hastalik_id= $1";
        try {

            const getList = (await pool.query(sql, [hastalikId])).rows;

            if (getList.length > 0) {
                return new successDataResult(getList, constMessage.iceriklerListelendi);
            } else {
                return new errorDataResult(constMessage.icerikListelemeBasarisiz);
            }
        } catch (error) {
            return new errorDataResult(error.detail);
        }
    },
    async addIcerik(icerik) {
        let values = [icerik.hastalikId, icerik.gifUrl, icerik.aciklama, icerik.siralama]

        let sql = "INSERT INTO icerikler (hastalik_id, gif_url, aciklama, siralama) VALUES ($1, $2, $3, $4)";
        try {
            const addIcerik = (await pool.query(sql, values)).rowCount
            if (addIcerik > 0) {
                return new successResult(constMessage.icerikEklendi);
            } else {
                return new errorResult(constMessage.icerikEklenemedi);
            }
        } catch (error) {
            return new errorResult(error.detail);
        }

    },
    async updateIcerik(icerik) {
        let values = [icerik.hastalikId, icerik.gifUrl, icerik.aciklama, icerik.siralama, icerik.id];
        let sql = "UPDATE icerikler SET hastalik_id = $1, gif_url = $2 , aciklama = $3, siralama = $4 WHERE id = $5";

        try {
            const updataIcerik = (await pool.query(sql, values)).rowCount
            if (updataIcerik > 0) {
                return new successResult(constMessage.icerikGuncellendi);
            } else {
                return new errorResult(constMessage.icerikGuncellenemedi);
            }
        } catch (error) {
            return new errorResult(error.detail);
        }
    },
    async deleteIcerik(icerikId) {

        let sql = "DELETE FROM icerikler WHERE id = $1";

        try {
            const deleteIcerik = (await pool.query(sql, [icerikId])).rowCount
           
            if (deleteIcerik > 0) {
                return new successResult(constMessage.icerikSilindi);
            } else {
                return new errorResult(constMessage.icerikSilinemedi);
            }
        } catch (error) {
            return new errorResult(error.detail);
        }
    },

}
module.exports = icerikler