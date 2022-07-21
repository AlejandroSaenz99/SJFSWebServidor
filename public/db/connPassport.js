const mysql = require('mysql');
const pool = mysql.createPool({
  // connectionLimit: 10,
  // supportBigNumbers: true,
  // host: process.env.DB_EXTR_HOST,
  // user: process.env.DB_EXTR_USER,
  // password: process.env.DB_EXTR_PASS,
  // database: "ardairyweb",
  host: '185.28.21.84',
  user: 'u524173526_root2',
  password: 'P@mex321',
  port: 3306,
  database: 'u524173526_viaje'
})

pool.getConnection(function(err, conn){
  if (err) throw err;
  console.log('Datebase connection id ' + conn.threadId + ' general');
  conn.release();
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
});

module.exports = pool;