const help = `
  amifree [command]

  commands:
  today ...................... show availability for today
  tomorrow.................... show availability for tomorrow
  version, -v, --version ..... show package version
  help, -h, --help ........... show this help menu
`
module.exports = () => {
  console.log(help);
}