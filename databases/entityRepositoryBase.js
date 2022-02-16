/*const sqlMetinOlusturucu = require('../helper/sqlMetinOlusturucu');
const databaseFonksiyonlari = require('./databaseFonksiyonlari');

const entityRepositoryBase = {
    async getAll(tabloName) {
        let sql = "SELECT * FROM " + tabloName;
        return databaseFonksiyonlari.getFonksiyonu(sql);
    },
    async birParametreyeGoreGetirme(tabloName, hangiVeriyeGore, value) {
        let sql = "SELECT * FROM " + tabloName + " WHERE " + hangiVeriyeGore + " = '" + value + "'";
        return databaseFonksiyonlari.getFonksiyonu(sql);
    },
    async ikiParametreyeGoreGetirme(tabloName, hangiVeriyeGore1, value1, hangiVeriyeGore2, value2) {
        let sql = "SELECT * FROM " + tabloName + " WHERE " + hangiVeriyeGore1 + " = '" + value1 + "'"+" AND "+hangiVeriyeGore2+" = '"+value2+"'";
        return databaseFonksiyonlari.getFonksiyonu(sql);
    },
    async cokluParametreyeGoreGetirme(tabloName, hangiVeriyeGoreler, values,andOr,diger=null) {
       let sql = sqlMetinOlusturucu.selectFromWhere(tabloName,hangiVeriyeGoreler,values,andOr,diger)
       return databaseFonksiyonlari.getFonksiyonu(sql)
       // let sql = "SELECT * FROM " + tabloName + " WHERE " + hangiVeriyeGore1 + " = '" + value1 + "'"+" AND "+hangiVeriyeGore2+" = '"+value2+"'";
        //return databaseFonksiyonlari.getFonksiyonu(sql);
    },
    async cokluParametreyleEkleme(tabloName,hangiVeriler,values){
     let sql = await sqlMetinOlusturucu.addSqlMetinUret(tabloName,hangiVeriler,values);
      return await databaseFonksiyonlari.addFonksiyonu(sql);
    },
    async silme(tabloName,wheredegeriSonrasi){
        let sql = await sqlMetinOlusturucu.deleteSqlMetinUret(tabloName,wheredegeriSonrasi)
        return await databaseFonksiyonlari.deleteFonksiyonu(sql)
    }

}
module.exports = entityRepositoryBase*/