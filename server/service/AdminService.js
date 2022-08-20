'use strict';


/**
 * Get all games that user played
 * This endpoint for get games data that user played from database and can only access by admin
 *
 * returns inline_response_201_10
 **/
exports.getAllGames = function() {
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
 * Get all rooms game
 * This endpoint for get all room from database and can only access by admin
 *
 * returns inline_response_201_11
 **/
exports.getAllRooms = function() {
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
 * Get all user from database
 * This endpoint for get all user credential include biodata and can only be accessed by admin.
 *
 * returns inline_response_201_9
 **/
exports.getAllUser = function() {
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
 * Get all round record
 * This endpoint for get all round record from player game and can only access by admin
 *
 * returns inline_response_201_4
 **/
exports.getAllrounds = function() {
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

