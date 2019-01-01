const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { google } = require('googleapis');

const { parseArgv, checkEnvVars } = require('./lib');

require('dotenv').config();

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';

/**
 * TODO:
 * 
 * look into minimist library
 * provide interactivity by allowing users to enter args like 'amifree tomorrow'
 * 
 */
let today = new Date();
let endOfToday = new Date();
endOfToday.setHours(71,59,59,999);

/**
 * ==========================================
 * BEGIN MAIN PROGRAM FUNCTION
 * ==========================================
 * 
 * @param {array} argv Read arguments from process.argv
 */
function main(argv) {

  // Asyncronous, credentials.json file must resolve before authorize() is called
  fs.readFile(path.resolve(__dirname, 'credentials.json'), (err, credentials) => {
    if (err) return console.log("Error loading client secret file:", err);

    // Asyncronous, contains a call to fs.readFile() to parse the client token
    authorize(JSON.parse(credentials), amIFree);
  });

  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;

    // Uses axios http adapter to create an OAuth client with the credentials 
    // given by the Google Developers API Console 
    // (node_modules/google-auth-library/build/src/auth/authclient.js)
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

    // Verify client token and then run application
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
   * This function fires the first time that the application is run to 
   * check that the user has created an application in the API dev console
   * and added their OAuth JSON Credentials to the project directory. 
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

    checkEnvVars();
    parseArgv(argv);

    const calendar = google.calendar({version: 'v3', auth});
    calendar.freebusy.query({
      auth: auth,
      headers: { "content-type" : "application/json" },
      resource: {
        items: [
          { "id" : process.env.CALENDAR_ID }
        ],
        timeMin: today,
        timeMax: endOfToday
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
          process.stdout.write(`\x1b[36;1m to\x1b[0m${start.slice(11)} PST, ${start.substring(0, 10)}\n`);
          // process.stdout.write("")
          process.stdout.write(`\x1b[36;1mfrom\x1b[0m${end.slice(11)} PST`);
          if (i == timeSlots.length - 1) process.stdout.write(`\x1b[36;1m to\x1b[0m 5:00:00 PM PST, ${start.substring(0, 10)}\n\n\n`)
        };
      } else {
        // Debug why this is not printing
        console.log('No upcoming events found.');
      }
    });
  }
}

module.exports = main;     