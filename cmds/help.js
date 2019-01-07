const help = `Usage: amifree [options]

Options:
  today                    List Google Calendar availability for today.
  tomorrow                 List Google Calendar availability for tomorrow.
  version, -v, --version   Show package version.
  help, -h, --help         Display this help menu.

Examples:
  amifree today            # Displays available timeslots on your calendar for current day
  amifree tomorrow         # Displays availabel timelines on your calendar for tomorrow 

Documentation can be found at https://github.com/matthewvolk/amifree
`
module.exports = () => {
  console.log(help);
}