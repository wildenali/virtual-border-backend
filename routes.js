'use strict';
const { json } = require('body-parser');

 //supaya code nya dijalankan secara strict atau ketat

module.exports = function(app) {
  var jsonku = require('./kontroler');

  app.route('/')
    .get(jsonku.index);

  app.route('/tampilSemuaSensor')
    .get(jsonku.tampilSemuaSensorMotion);
}