const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const instructions = `\x1b[1m
                 _  __              ___  
                (_)/ _|            |__ \\ 
  __ _ _ __ ___  _| |_ _ __ ___  ___  ) |
 / _\` | '_ \` _ \\| |  _| '__/ _ \\/ _ \\/ / 
| (_| | | | | | | | | | | |  __/  __/_|  
 \\__,_|_| |_| |_|_|_| |_|  \\___|\\___(_) 
\x1b[0m

Welcome! This application uses Google OAuth2 to read your Google Calendar events.
For a tutorial explaining exactly how to download your Google OAuth2 credentials for use with this application, please visit:
\x1b[1;36mhttps://github.com/matthewvolk/amifree/tree/master/docs/oauth-tutorial\x1b[0m`

const getCredentialsJson = () => {
  readline.question("\nDrag the downloaded credentials JSON file into this terminal to get the path and then press ENTER:\n", (downloadPath) => {
    console.log(`Importing Credentials.json from: ${downloadPath}`);
    readline.close();
    validateCredentialsJson(downloadPath.trim());
  });
}

const validateCredentialsJson = (downloadPath) => {
  var obj;
  fs.readFile(downloadPath, 'utf8', function (err, data) {
    if (err) {
      console.log('\x1b[31;1m\u2718 ERROR: Path does not lead to a valid JSON file:\x1b[0m', err.path);
      return;
    }

    obj = JSON.parse(data);

    /**
     * TODO:
     * Better file validation 
     */
    if (
      !obj.installed || 
      !obj.installed.client_id ||
      !obj.installed.project_id ||
      !obj.installed.auth_uri ||
      !obj.installed.token_uri ||
      !obj.installed.auth_provider_x509_cert_url ||
      !obj.installed.client_secret ||
      !obj.installed.redirect_uris
      ) {
      console.log(`\x1b[31;1m\u2718 ERROR: File contains valid JSON, but might be the Incorrect JSON File: ${path}\x1b[0m`);
      return;
    }

    // If JSON is valid, create credentials.json in root directory
    json = JSON.stringify(obj);
    fs.writeFile(path.resolve(__dirname, '../credentials.json'), json, (err) => {
      if (err) {
        console.log('\x1b[31;1m\u2718 ERROR: credentials JSON file could not be written.\x1b[0m')
      }
      if (!err) {
        console.log('\x1b[92;1m\u2714 credentials.json file created!\x1b[0m');
        require('../lib/getCalendarId')();
      }
    });
  });
}

module.exports = () => {
  console.log(instructions);
  getCredentialsJson();
}