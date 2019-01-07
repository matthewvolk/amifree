const fs = require('fs');
const path = require('path');

const authorize = require('./authorize');
const amIFree = require('./amifree');

module.exports = (DATE) => {
  fs.readFile(path.resolve(__dirname, '../credentials.json'), (err, credentials) => {
    if (err) return console.log("Error loading client secret file." + 
    "Please visit https://console.developers.google.com and create a new OAuth application:", err);

    // Asyncronous, contains a call to fs.readFile() to parse the client token
    authorize(JSON.parse(credentials), amIFree, DATE);
  });
}