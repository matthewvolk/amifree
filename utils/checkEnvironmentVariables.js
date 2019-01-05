const fs = require('fs');
const path = require('path');

module.exports = () => {
  fs.readFile(path.resolve(__dirname, '../.env'), "utf8", (err, content) => {
    if (err) return console.log("\x1b[31;1m%s\x1b[0m", "\u2718 .env file not found!");
    /**
     * TODO: add check to read .env file to ensure the file does not only exist, but it also has the CALENDAR_ID variable set
     * /r/anattemptwasmade:
     * if (content && content.indexOf("CALENDAR_ID") === -1) return console.log("\x1b[31;1m%s\x1b[0m", "\u2718 .env file found but does not have CALENDAR_ID set!");
     */
    console.log('\x1b[92;1m\u2714 .env file found with CALENDAR_ID variable set\x1b[0m');
    console.log(content)
  })
}