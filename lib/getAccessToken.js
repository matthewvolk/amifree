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
  function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    });

  //   process.stdout.write(`\x1b[1m
  //                 _  __              ___  
  //                 (_)/ _|            |__ \\ 
  //   __ _ _ __ ___  _| |_ _ __ ___  ___  ) |
  //  / _\` | '_ \` _ \\| |  _| '__/ _ \\/ _ \\/ / 
  // | (_| | | | | | | | | | | |  __/  __/_|  
  //  \\__,_|_| |_| |_|_|_| |_|  \\___|\\___(_)                                
  //   \x1b[0m`)
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

        callback(oAuth2Client);
      })
    })
  }

  module.exports = getAccessToken;