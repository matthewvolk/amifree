const fs = require('fs');
const path = require('path');

const { parseArgv, checkEnvVars, authorize, amIFree } = require('./utils');

require('dotenv').config();

/**
 * @param {array} argv Read arguments from process.argv
 */
module.exports = (argv) => {

  /**
   * Check that the user has set process.env.CALENDAR_ID
   * 
   * This may not be necessary if user will enter calendar ID via CLI args parsed below
   */
  checkEnvVars();

  /**
   * Parse CLI args (argv) and use switch statement to call functions below based on CLI arg
   */
  parseArgv(argv);

  // Credentials.json file is read before authorize() is called
  fs.readFile(path.resolve(__dirname, 'credentials.json'), (err, credentials) => {
    if (err) return console.log("Error loading client secret file. Please visit https://console.developers.google.com and create a new OAuth application:", err);

    // Asyncronous, contains a call to fs.readFile() to parse the client token
    authorize(JSON.parse(credentials), amIFree);
  });
}