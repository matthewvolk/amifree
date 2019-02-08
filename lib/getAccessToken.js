const fs = require('fs');
const path = require('path');
const readline = require('readline');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = path.resolve(__dirname, '../token.json');

/**
   * Requests access token from user.
   * 
   * @param {Object} oAuth2Client 
   * @param {Function} callback 
   */
  function getAccessToken(oAuth2Client, callback, DATE) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    });

    console.log(`\n\x1b[1mTo finish the setup of this app and generate an access token, visit the URL below:\x1b[0m`)
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

        callback(oAuth2Client, DATE);
      })
    })
  }

  module.exports = getAccessToken;