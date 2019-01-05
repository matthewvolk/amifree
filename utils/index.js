const parseCLIArgs = require('./parseCLIArgs');
const checkEnvironmentVariables = require('./checkEnvironmentVariables');
const authorize = require('./authorize');
const amIFree = require('./amifree');

module.exports = {
  parseCLIArgs,
  checkEnvironmentVariables,
  authorize,
  amIFree
}