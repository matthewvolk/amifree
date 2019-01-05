const parseArgv = require('./parseArgv');
const checkEnvVars = require('./checkEnvVars');
const authorize = require('./authorize');
const amIFree = require('./amifree');

module.exports = {
  parseArgv,
  checkEnvVars,
  authorize,
  amIFree
}