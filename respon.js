'use strict'; //supaya code nya dijalankan secara strict atau ketat

exports.ok = function(value, res) {
  var data = {
    'status': 200,
    'value': value
  };
  res.json(data);
  res.end();
}