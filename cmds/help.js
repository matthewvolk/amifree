const help = `\x1b[0mUsage: amifree [options]

Options:
  \x1b[36;1mtoday\x1b[0m                    List Google Calendar availability for today.
  \x1b[36;1mtomorrow\x1b[0m                 List Google Calendar availability for tomorrow.
  \x1b[36;1mversion, -v, --version\x1b[0m   Show package version.
  \x1b[36;1mhelp, -h, --help\x1b[0m         Display this help menu.

Examples:
  \x1b[36;1mamifree today\x1b[0m            # Displays available timeslots on your calendar for current day
  \x1b[36;1mamifree tomorrow\x1b[0m         # Displays availabel timelines on your calendar for tomorrow 

Documentation can be found at https://github.com/matthewvolk/amifree
`
module.exports = () => {
  console.log(help);
}