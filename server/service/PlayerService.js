'use strict';


/**
 * Create player biodata
 * Player can create and fullfill biodata and player must login to access this site
 *
 * body BiodataEntity 
 * returns inline_response_201_1
 **/
exports.createBiodataPlayer = function(body) {
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
 * Get player biodata
 * This endpoint for get spesific biodata by giving user ID in the path. If id not found, site will return `404`
 *
 * returns inline_response_201_1
 **/
exports.getBiodata = function() {
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

