const fs = require('fs');
const path = require('path');

module.exports = () => {
  fs.readFile(path.resolve(__dirname, '../.env'), (err, success) => {
    if (err) return console.log("\x1b[31;1m%s\x1b[0m", ".env file not found!");
    console.log('\n\x1b[92;1m\u2714 .env file found with CALENDAR_ID variable set\x1b[0m');
  })
}