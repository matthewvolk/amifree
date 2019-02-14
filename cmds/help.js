const help = `
\x1b[0mUsage: \x1b[36;1mamifree [options]\x1b[0m

Options:
  \x1b[36;1msetup\x1b[0m                    One time CLI setup and configuration process.
  \x1b[36;1mtoday\x1b[0m                    List Google Calendar availability for today.
  \x1b[36;1mtomorrow\x1b[0m                 List Google Calendar availability for tomorrow.
  \x1b[36;1minfo\x1b[0m                     Print out information about your configuration.
  \x1b[36;1mversion, -v, --version\x1b[0m   Show package version.
  \x1b[36;1mhelp, -h, --help\x1b[0m         Display this help menu.

Examples:
  \x1b[36;1mamifree today\x1b[0m            Displays available timeslots on your calendar for current day
  \x1b[36;1mamifree tomorrow\x1b[0m         Displays availabel timelines on your calendar for tomorrow 

Documentation can be found at \x1b[36;1mhttps://github.com/matthewvolk/amifree\x1b[0m 
`
module.exports = () => {
  console.log(help);
}