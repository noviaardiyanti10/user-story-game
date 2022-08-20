'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.getAllGames = function getAllGames (req, res, next) {
  Admin.getAllGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllRooms = function getAllRooms (req, res, next) {
  Admin.getAllRooms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllUser = function getAllUser (req, res, next) {
  Admin.getAllUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllrounds = function getAllrounds (req, res, next) {
  Admin.getAllrounds()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
