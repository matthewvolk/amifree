const { google } = require('googleapis');

const TODAY = new Date();
const END_OF_TODAY = new Date();
      END_OF_TODAY.setHours(71,59,59,999);

function amIFree(auth) {
    const calendar = google.calendar({version: 'v3', auth});
    calendar.freebusy.query({
      auth: auth,
      headers: { "content-type" : "application/json" },
      resource: {
        items: [
          { "id" : process.env.CALENDAR_ID }
        ],
        timeMin: TODAY,
        timeMax: END_OF_TODAY
      }
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      if (res) {
        let timeSlots = res.data.calendars[process.env.CALENDAR_ID].busy

        for (let i = 0; i < timeSlots.length; i++) {
          let start = new Date(timeSlots[i].start).toLocaleString('en-US', { hour12: true })
          let end = new Date(timeSlots[i].end).toLocaleString('en-US', { hour12: true })

          // Refactor to not use hardcoded PST
          if (i == 0) process.stdout.write(`\n\x1b[36;1mI am free\nfrom\x1b[0m 7:30:00 AM PST`)
          process.stdout.write(`\x1b[36;1m to \x1b[0m${start.slice(10)} PST on ${start.substring(0, 10)}\n`);
          // process.stdout.write("")
          process.stdout.write(`\x1b[36;1mfrom \x1b[0m${end.slice(10)} PST`);
          if (i == timeSlots.length - 1) process.stdout.write(`\x1b[36;1m to\x1b[0m 5:00:00 PM PST on ${start.substring(0, 10)}\n\n\n`)
        };
      } else {
        // Debug why this is not printing
        console.log('No upcoming events found.');
      }
    });
  }

module.exports = amIFree;