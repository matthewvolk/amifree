module.exports = (argv) => {

  argv = require('minimist')(process.argv.slice(2));
  const cmd = argv._[0] || 'help';

  if (!argv) {
    console.log("\n\x1b[31;1m%s\x1b[0m", "\u2718 No arguments found!")
    return;
  }
  if (argv && argv._.length == 0 && Object.getOwnPropertyNames(argv).length === 1) {
    console.log('\n\x1b[92;1m\u2714 arguments object detected \x1b[93;1mWITHOUT \x1b[92;1marguments:\x1b[0m');
    console.log(argv);
    return;
  }
  
  switch (cmd) {
    case 'today':
      const START_OF_TODAY = new Date();
            START_OF_TODAY.setHours(0,0,0,0);
      const END_OF_TODAY = new Date();
            END_OF_TODAY.setHours(23,59,59,999);

      return {
        start: START_OF_TODAY,
        end: END_OF_TODAY
      }

    case 'tomorrow':
      const START_OF_TOMORROW = new Date();
            START_OF_TOMORROW.setHours(24,0,0,0);
      const END_OF_TOMORROW = new Date();
            END_OF_TOMORROW.setHours(47,59,59,999); 

      return {
        start: START_OF_TOMORROW,
        end: END_OF_TOMORROW
      }

    case 'help':
      return {
        help: `
          amifree [command] <options>
      
          today .............. show available timeslots for today
          tomorrow ........... show available timeslots for tomorrow
          version ............ show package version
          help ............... shows this menu`
      }

    default:
      return {
        error: `"${cmd}" is not a valid command! type "amifree --help" for a list of available commands`
      }
  }
}