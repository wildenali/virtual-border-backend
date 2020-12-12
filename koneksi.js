var mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'virtual_border'
})

conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Berhasil terkoneksi ke database mySql');
  }
})

module.exports = conn;