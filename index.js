const { checkEnvironmentVariables } = require('./lib');
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
      return console.error(`"${cmd}" is not a valid command! Run 'amifree --help' for a list of available commands`);
  }
  return;
}
