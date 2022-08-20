'use strict';

var utils = require('../utils/writer.js');
var Player = require('../service/PlayerService');

module.exports.createBiodataPlayer = function createBiodataPlayer (req, res, next, body) {
  Player.createBiodataPlayer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBiodata = function getBiodata (req, res, next) {
  Player.getBiodata()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
