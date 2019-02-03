const fs = require('fs');
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

\x1b[1m1. Open a web browser and navigate to: \x1b[0m
\x1b[34;4mhttps://console.developers.google.com/\x1b[0m
\x1b[1m2. Follow steps 1 - 3 under "Get started": \x1b[0m
\x1b[34;4mhttps://support.google.com/cloud/answer/3465889?hl=en\x1b[0m
\x1b[1m3. Navigate to the Credentials page, select Create credentials.\x1b[0m
\x1b[1m4. Select OAuth client ID.\x1b[0m
\x1b[1m5. Supply the requested information.\x1b[0m
\x1b[1m6. Click Save to return to the Credentials screen.\x1b[0m
\x1b[1m7. Select Other for the Application type.\x1b[0m
\x1b[1m8. Download the JSON file containing your credentials.\x1b[0m`

const getCredentialsJson = () => {
  readline.question("\nDrag the downloaded credentials JSON file into this terminal to get the path and then press ENTER:\n", (path) => {
    console.log(`Importing Credentials.json from: ${path}`);
    readline.close();
    validateCredentialsJson(path);
  });
}

const validateCredentialsJson = (path) => {
  var obj;
  fs.readFile(path, 'utf8', function (err, data) {
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
    fs.writeFile('./credentials.json', json, (err) => {
      if (err) {
        console.log('\x1b[31;1m\u2718 ERROR: credentials JSON file could not be written.\x1b[0m')
      }
      if (!err) {
        console.log('\x1b[92;1m\u2714 credentials.json file created!\x1b[0m');
        require('../cmds/today');
      }
    });
  });
}

module.exports = () => {
  console.log(instructions);
  getCredentialsJson();
}