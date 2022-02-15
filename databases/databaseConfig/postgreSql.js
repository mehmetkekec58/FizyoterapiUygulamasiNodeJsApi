const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '12345',
  port: 5432,
})

pool.connect().then(()=>console.log("baglandi"))



module.exports=pool