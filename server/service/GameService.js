'use strict';


/**
 * Player accept challenge from opponent
 * This endpoint use for opponent when accept the challenge. Game will automatic create and first round will be start
 *
 * challenge String  (optional)
 * returns inline_response_201_8
 **/
exports.acceptOpponents = function(challenge) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "{\"name\":\"GAME_STARTED\",\"message\":\"Succes join room, game and first round will be start\"}",
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all games that user playing
 * This endpoint use for get list games that user playing.
 *
 * returns inline_response_201_3
 **/
exports.getGames = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get open rooms in game
 * This endpoint use for get all the rooms that are still open in the game.
 *
 * returns inline_response_201_2
 **/
exports.getOpenRooms = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get stats player account
 * This endpoint use for get opponent based on level that available in the game. When you choose the name and send it from parameters, it will display data that you choosed.
 *
 * name String  (optional)
 * returns inline_response_201_5
 **/
exports.getOpponents = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all rounds that user playing
 * This endpoint use for get all round that user playing in the game. User can get played and unplayed round here.
 *
 * returns inline_response_201_4
 **/
exports.getRounds = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get stats player account
 * This endpoint use for get user stats record in the game
 *
 * returns inline_response_201_5
 **/
exports.getStats = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Player challenge opponent
 * This endpoint use for player challenge the opponent that player choose. When the opponent choose, room game will automatic create with request body.
 *
 * body UserRoomEntity 
 * returns inline_response_201_6
 **/
exports.postOpponents = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "name" : "SUCCESS_CREATE_ROOM",
    "message" : "Waiting opponent to join room.."
  },
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Start round game
 * This endpoint use for player when input choice in current round
 *
 * body UserRoundEntity 
 * returns inline_response_201_4
 **/
exports.postRounds = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Player reject challenge from opponent
 * This endpoint use for opponent when reject the challenge. Room will automatic closed.
 *
 * challenge String  (optional)
 * returns inline_response_201_7
 **/
exports.rejectOpponents = function(challenge) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "name" : "ROOM_CLOSED",
    "message" : "Room closed, you can not started the game."
  },
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

