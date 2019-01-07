const path = require('path');
require('dotenv').config({path: path.join(__dirname, ".env")});

/**
 * Copyright (C) 2019 Matthew Volk - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the ISC license.
 *
 * You should have received a copy of the ISC license with
 * this program. If not, please write to: volkmattj@gmail.com, 
 * or visit https://github.com/matthewvolk/amifree/blob/master/LICENSE.txt:
 *
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
