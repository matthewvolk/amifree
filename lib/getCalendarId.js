const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const getCalendarId = () => {
  readline.question("\nEnter the Calendar ID of the calendar you want to read (usually just your email address):\n", (calendarId) => {
    console.log(`Creating environment variable from Calendar ID: ${calendarId}`);
    readline.close();
    writeEnvFile(calendarId.trim());
    console.log('\x1b[92;1m\u2714 Environment variable file created!\x1b[0m');
    console.log("\x1b[92;1m\u2714 You're almost ready use this application! Run 'amifree today' to generate an access token to read your Calendar.\x1b[0m");
  });
}

const writeEnvFile = (calendarId) => {
  var envFileContents = `CALENDAR_ID=${calendarId}`;

  fs.writeFileSync('./.env', envFileContents, (err) => {
    if (err) {
      console.log('\x1b[31;1m\u2718 ERROR: Environment variable file could not be written.\x1b[0m')
    }
    if (!err) {
      
    }
  });
}

module.exports = () => {
  getCalendarId();
}