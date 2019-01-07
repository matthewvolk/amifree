const help = `Usage: amifree [options]

Options:
  today                    The person name.
  tomorrow                 The person birthday or born date.
  version, -v, --version   Comming birthdays. Pass a date in the future.
  help, -h, --help         Use a different birthday json file path.

Examples:
  amifree today            # Displays available timeslots on your calendar for current day
  amifree tomorrow         # Displays availabel timelines on your calendar for tomorrow 

Documentation can be found at https://github.com/matthewvolk/amifree
`
module.exports = () => {
  console.log(help);
}