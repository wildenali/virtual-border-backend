'use strict'; //supaya code nya dijalankan secara strict atau ketat

var response = require('./respon');
var connection = require('./koneksi');

exports.index = function(req, res) {
  response.ok("Aplikasi REST API mantuulll....", res);
};