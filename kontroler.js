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

// Menampilkan berdasarkan Id Sensor
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

// Menampilkan Berdasarkan Name Sensor
exports.tampilBerdasarkanNameSensor = function(req, res) {
  
  let name = req.params.name;

  connection.query('SELECT * FROM pik_golf_island WHERE name = ?', [name], function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  })
}

// Menampilkan Berdasarkan Motion State
exports.tampilBerdasarkanMotionState = function(req, res) {
  
  let motion = req.params.motionState;

  connection.query('SELECT * FROM pik_golf_island WHERE motion_state = ?', [motion], function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  })
}

// Menampilkan Berdasarkan Speaker State
exports.tampilBerdasarkanSpeakerState = function(req, res) {
  
  let speaker = req.params.speakerState;

  connection.query('SELECT * FROM pik_golf_island WHERE speaker_state = ?', [speaker], function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  })
}