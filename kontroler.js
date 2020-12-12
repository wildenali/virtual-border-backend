'use strict'; //supaya code nya dijalankan secara strict atau ketat

var response = require('./respon');
var connection = require('./koneksi');

exports.index = function(req, res) {
  response.ok("Aplikasi REST API mantuulll....", res);
};

// Menampilkan semua data sensor
exports.tampilSemuaSensorMotion = function(req, res) {
  connection.query('SELECT * FROM pik_golf_island', function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  })
}

// Menampilkan semua data sensor
exports.tampilBerdasarkanIdSensor = function(req, res) {
  
  let id = req.params.id;

  connection.query('SELECT * FROM pik_golf_island WHERE id_sensor = ?', [id], function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  })
}