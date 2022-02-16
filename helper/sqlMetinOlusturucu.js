
/*var  sqlMetinOlusturucu ={
 selectFromwhereSqlMetinUret(tabloName, hangi, value, andOr,diger){
    let ss  = "SELECT * FROM " + tabloName + " WHERE ";
     if (hangi.length == value.length) {
        for (let i = 0; i < hangi.length; i++) {
         if (i+1 != hangi.length)
             ss += hangi[i]+" = '"+ value[i]+"' "+andOr[i]+" "
         else
         ss += hangi[i]+" = '"+ value[i]+"'"
    
        } 
        if (diger!=null) {
            ss+=diger;
        } 
     }
    return ss;
 },
 updateSqlMetinUret(tabloName, yeniHangi, yenivalue, id ,diger){
    let ss  = "UPDATE" + tabloName + " SET ";
     if (yeniHangi.length == yenivalue.length) {
        for (let i = 0; i < yeniHangi.length; i++) {
         if (i+1 != yeniHangi.length)
             ss += yeniHangi[i]+" = '"+ yenivalue[i]+"', "
         else
         ss += yeniHangi[i]+" = '"+ yenivalue[i]+"'"
    
        } 

       ss +=" WHERE " + id 

        if (diger!=null) {
            ss+=diger;
        } 
     }
    return ss;

    },
    deleteSqlMetinUret(tabloName,id, diger){
        let ss  = "DELETE FROM " + tabloName + " WHERE "+id;
        if (diger!=null) {
            ss+=diger;
        } 
        return ss;
    },
    addSqlMetinUret(tabloName,hangi,value){
        let ss  = "INSERT INTO " + tabloName +" (";
        if (hangi.length == value.length) {
            for (let i = 0; i < hangi.length; i++) {
                if (i+1 != hangi.length)
                    ss += hangi[i]+","
                else
                ss += hangi[i]+") VALUES (";
           
               } 

               for (let i = 0; i < value.length; i++) {
                if (i+1 != value.length)
                    ss +="'"+ value[i]+"',"
                else
                ss += "'"+value[i]+"')";
           
               } 

      } 
      return ss;
    }
   
}
module.exports=sqlMetinOlusturucu*/