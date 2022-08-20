'use strict';


/**
 * User get access token
 * Endpoint for login with credential input (username and password). If credential valid, user will get access token. If user dont have any account, please register before.
 *
 * body Object 
 * returns inline_response_201
 **/
exports.loginUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "accessToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImJpbmFyMTIzNCIsIm5hbWUiOiJiaW5hcjEyMyJ9.keFGv6cT4lQBJyCe7kIKW3JZ2UY0jTPhqDe8IVSaUSs",
    "expiresAt" : 12000,
    "refreshToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImJpbmFyMTIzNCIsIm5hbWUiOiJiaW5hcjEyMyJ9.keFGv6cT4lQBJyCe7kIKW3JZ2UY0jTPhqDe8IVSaUSs"
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
 * Create new account
 * Endpoint for create new account in this site. If username already exist it will return status code `422`
 *
 * body Object 
 * returns inline_response_201
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "accessToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImJpbmFyMTIzNCIsIm5hbWUiOiJiaW5hcjEyMyJ9.keFGv6cT4lQBJyCe7kIKW3JZ2UY0jTPhqDe8IVSaUSs",
    "expiresAt" : 12000,
    "refreshToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImJpbmFyMTIzNCIsIm5hbWUiOiJiaW5hcjEyMyJ9.keFGv6cT4lQBJyCe7kIKW3JZ2UY0jTPhqDe8IVSaUSs"
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

