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
  let cmd = argv._[0] || 'today'

  /**
   * TODO: If user has not yet set process.env.CALENDAR_ID, terminate the application.
   */
  // if (process.env.CALENDAR_ID) console.log('\x1b[92;1m\u2714 process.env.CALENDAR_ID\x1b[0m');
  
  /**
   * TODO: If user has not yet set credentials.json, terminate the application.  
   */
  // if (fs.existsSync(path.join(__dirname, "credentials.json"))) console.log('\x1b[92;1m\u2714 credentials.json\x1b[0m');

  if (argv.version || argv.v) {
    cmd = 'version'
  }

  if (argv.help || argv.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'config':
      require('./cmds/config')();
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
