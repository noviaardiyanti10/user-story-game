'use strict';


/**
 * check and test API
 * This endpoit use for check healht of API, when run this endpoint will show json status
 *
 * returns inline_response_200
 **/
exports.checkAPI = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "OK",
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

