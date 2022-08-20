'use strict';

var utils = require('../utils/writer.js');
var Main = require('../service/MainService');

module.exports.checkAPI = function checkAPI (req, res, next) {
  Main.checkAPI()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
