const fs = require('fs');
const path = require('path');
const readline = require('readline');

const { google } = require('googleapis');
const { parseArgv, checkEnvVars } = require('./utils');

require('dotenv').config();

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';
const TODAY = new Date();
const END_OF_TODAY = new Date();
      END_OF_TODAY.setHours(71,59,59,999);

/**
 * Main Program Function. Called by ./bin/amifree
 * 
 * @param {array} argv Read arguments from process.argv
 */
function main(argv) {

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

  // Creates OAuth client with credentials.json, callback requests access token from user. 
  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;

    /**
     * Uses axios http adapter to create an OAuth client with the credentials 
     * given by the Google Developers API Console 
     * (node_modules/google-auth-library/build/src/auth/authclient.js) 
     */
    const oAuth2Client = new google.auth.OAuth2( // new google.auth.OAuth2 is coming from line 72 of node_modules/googleapis/build/src/lib/googleapis.js
      client_id, client_secret, redirect_uris[0]);

    // Verify client token and then request access token
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
   * Requests access token from user.
   * 
   * @param {Object} oAuth2Client 
   * @param {Function} callback 
   */
  function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    });

    process.stdout.write(`\x1b[1m
                  _  __              ___  
                  (_)/ _|            |__ \\ 
    __ _ _ __ ___  _| |_ _ __ ___  ___  ) |
  / _\` | '_ \` _ \\| |  _| '__/ _ \\/ _ \\/ / 
  | (_| | | | | | | | | | | |  __/  __/_|  
  \\__,_|_| |_| |_|_|_| |_|  \\___|\\___(_)                                
    \x1b[0m`)
    console.log(`\n\x1b[1mThis app uses Google OAuth2 to read your Google Calendar events!\nTo authorize this application, visit the URL below:\x1b[0m`)
    console.log(`\x1b[34;4m${authUrl}\x1b[0m`);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('\n\x1b[1mEnter the code from that page here: \x1b[0m', (code) => {
      rl.close();

      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('\x1b[91;1mError retrieving access token\x1b[0m', err);
        oAuth2Client.setCredentials(token);

        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) console.error(err);
          console.log('\n\x1b[92;1m\u2714 Token stored to:\x1b[0m', TOKEN_PATH);
        });

        callback(oAuth2Client);
      })
    })
  }

  function amIFree(auth) {
    const calendar = google.calendar({version: 'v3', auth});
    calendar.freebusy.query({
      auth: auth,
      headers: { "content-type" : "application/json" },
      resource: {
        items: [
          { "id" : process.env.CALENDAR_ID }
        ],
        timeMin: TODAY,
        timeMax: END_OF_TODAY
      }
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      if (res) {
        let timeSlots = res.data.calendars[process.env.CALENDAR_ID].busy

        for (let i = 0; i < timeSlots.length; i++) {
          let start = new Date(timeSlots[i].start).toLocaleString('en-US', { hour12: true })
          let end = new Date(timeSlots[i].end).toLocaleString('en-US', { hour12: true })

          // Refactor to not use hardcoded PST
          if (i == 0) process.stdout.write(`\n\x1b[36;1mI am free\nfrom\x1b[0m 7:30:00 AM PST`)
          process.stdout.write(`\x1b[36;1m to \x1b[0m${start.slice(10)} PST on ${start.substring(0, 10)}\n`);
          // process.stdout.write("")
          process.stdout.write(`\x1b[36;1mfrom \x1b[0m${end.slice(10)} PST`);
          if (i == timeSlots.length - 1) process.stdout.write(`\x1b[36;1m to\x1b[0m 5:00:00 PM PST on ${start.substring(0, 10)}\n\n\n`)
        };
      } else {
        // Debug why this is not printing
        console.log('No upcoming events found.');
      }
    });
  }
}

module.exports = main;     