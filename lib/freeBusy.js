const fs = require('fs');
const path = require('path');

const authorize = require('./authorize');
const amIFree = require('./amifree');

module.exports = (DATE) => {
  fs.readFile(path.resolve(__dirname, '../credentials.json'), (err, credentials) => {
    if (err) return console.log("\n\x1b[31;1m\u2718 Credentials.json file not found! Please create a Google OAuth Application and then run 'amifree setup'.\n\n\x1b[0m", err);

    // Authorize contains a call to fs.readFile() to parse the client token
    authorize(JSON.parse(credentials), amIFree, DATE);
  });
}