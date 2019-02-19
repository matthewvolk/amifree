const fs = require('fs');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, ".env")});

/**
 * Copyright (C) 2019 Matthew Volk - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the ISC license.
 *
 * You should have received a copy of the ISC license with
 * this program. If not, please refer to:  
 * https://github.com/matthewvolk/amifree/blob/master/LICENSE.txt
 *
 * @param {array} argv Read arguments from process.argv
 */
module.exports = (argv) => {
  argv = require('minimist')(argv.slice(2));
  let cmd = argv._[0] || 'help';

  if (argv.version || argv.v) {
    cmd = 'version'
  }

  if (argv.help || argv.h) {
    cmd = 'help'
  }

  /**
   * TODO: 
   * Refactor to use error exit codes instead of console.log
   */
  if (!process.env.CALENDAR_ID && (cmd !== 'setup' && cmd !== 'help' && cmd !== 'version' && cmd !== 'info')) {
    console.log("\x1b[31;1m%s\x1b[0m", "\u2718 Your Calendar ID has not yet been configured! Please run 'amifree setup' to fix this error. Line 32");
    return;
  }
  
  /**
   * TODO:
   * Refactor to use error exit codes instead of console.log
   */
  if (!fs.existsSync(path.join(__dirname, "credentials.json")) && (cmd !== 'setup' && cmd !== 'help' && cmd !== 'version' && cmd !== 'info')) {
    console.log("\x1b[31;1m%s\x1b[0m", "\u2718 Your application credentials have not yet been configured! Please run 'amifree setup' to fix this error.");
    return;
  }

  switch (cmd) {
    case 'setup':
      require('./cmds/setup')();
      break;

    case 'info':
      require('./cmds/info')();
      break;

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
      require('./cmds/error')(cmd);
      return;
  }
  return;
}
