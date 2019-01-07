const handleArgs = require('./handleArgs');
const checkEnvironmentVariables = require('./checkEnvironmentVariables');
const authorize = require('./authorize');
const amIFree = require('./amifree');
const freeBusy = require('./freeBusy');

module.exports = {
  handleArgs,
  checkEnvironmentVariables,
  authorize,
  amIFree,
  freeBusy
}