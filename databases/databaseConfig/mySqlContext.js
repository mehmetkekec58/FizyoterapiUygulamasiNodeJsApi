const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });
  con.connect();
module.exports = con



