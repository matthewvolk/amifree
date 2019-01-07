const checkEnvironmentVariables = require('./checkEnvironmentVariables');
const authorize = require('./authorize');
const amIFree = require('./amifree');
const freeBusy = require('./freeBusy');

module.exports = {
  checkEnvironmentVariables,
  authorize,
  amIFree,
  freeBusy
}