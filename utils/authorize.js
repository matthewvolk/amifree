const fs = require('fs');
const { google } = require('googleapis');
const getAccessToken = require('./getAccessToken');

const TOKEN_PATH = 'token.json';

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

module.exports = authorize;