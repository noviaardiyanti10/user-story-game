'use strict';

var utils = require('../utils/writer.js');
var Game = require('../service/GameService');

module.exports.acceptOpponents = function acceptOpponents (req, res, next, challenge) {
  Game.acceptOpponents(challenge)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGames = function getGames (req, res, next) {
  Game.getGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpenRooms = function getOpenRooms (req, res, next) {
  Game.getOpenRooms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpponents = function getOpponents (req, res, next, name) {
  Game.getOpponents(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRounds = function getRounds (req, res, next) {
  Game.getRounds()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStats = function getStats (req, res, next) {
  Game.getStats()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postOpponents = function postOpponents (req, res, next, body) {
  Game.postOpponents(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postRounds = function postRounds (req, res, next, body) {
  Game.postRounds(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rejectOpponents = function rejectOpponents (req, res, next, challenge) {
  Game.rejectOpponents(challenge)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
