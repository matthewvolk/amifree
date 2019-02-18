const START_OF_TODAY = new Date();
      START_OF_TODAY.setHours(0,0,0,0);
const END_OF_TODAY = new Date();
      END_OF_TODAY.setHours(23,59,59,999);

/**
 * TODO: 
 * + Add time zone
 */

const info = `\n\x1b[92;1m\u2714 Reading from the Google Calendar of\x1b[0m: ${process.env.CALENDAR_ID}
\x1b[92;1m\u2714 The current date is\x1b[0m: ${START_OF_TODAY.toDateString()} 
`
module.exports = () => {
  console.log(info);
}