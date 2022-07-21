
let mysql      = require('mysql');

var pool  = mysql.createPool({

  connectionLimit: '10',

  host     :  '185.28.21.84', // 'localhost',

  user     : 'u524173526_root2',

  password : 'P@mex321',

  database : 'u524173526_viaje',

});



pool.getConnection(function(err, conn){

  if (err) throw err;

  console.log('Datebase connection id ' + conn.threadId + ' general');

  conn.release();

});



pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {

  if (error) throw error;

});



module.exports = pool;
// const mysql = require('mysql');
// const pool = mysql.createPool({
//   // connectionLimit: 10,
//   // supportBigNumbers: true,
//   // host: process.env.HOST_A,
//   // user: "u524173526_root",
//   // password: "Alex7112",
//   // database: "u524173526_MADS",
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   port: 3306,
//   database: 'crudnodejsmysql'
// });
// // let query=mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: '',
// //   port: 3306,
// //   database: 'crudnodejsmysql'
// //   });
// function query(sql, args) {
//   return new Promise((resolve, reject) => {
//     pool.getConnection(function (err, connection) {
//       if (err) {
//         return reject(err);
//       }
//       connection.query(sql, args, function (err, result) {
//         connection.release();
//         if (err) {
//           return reject(err);
//         }
//         return resolve(result);
//       });
//     });
//   });
// }

// module.exports = query;