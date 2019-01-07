require('dotenv').config();

/**
 * @param {array} argv Read arguments from process.argv
 */
module.exports = (argv) => {
  argv = require('minimist')(argv.slice(2));
  let cmd = argv._[0] || 'help'

  if (argv.version || argv.v) {
    cmd = 'version'
  }

  if (argv.help || argv.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'today':
      require('./cmds/today');
      break;

    case 'tomorrow':
      require('./cmds/tomorrow');
      break;

    case 'version':
      require('./cmds/version')();
      break;

    case 'help':
      require('./cmds/help')();
      break;

    default:
      return console.error(`\x1b[31;1m\u2718 "${cmd}" is not a valid command! 
      \x1b[97;1mRun 'amifree --help' for a list of available commands\x1b[0m`);
  }
  return;
}
