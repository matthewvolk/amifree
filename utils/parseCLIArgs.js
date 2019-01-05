module.exports = (argv) => {

  argv = require('minimist')(process.argv.slice(2));

  if (!argv) {
    console.log("\n\x1b[31;1m%s\x1b[0m", "\u2718 No arguments found!")
    return;
  }
  if (argv && argv._.length == 0 && Object.getOwnPropertyNames(argv).length === 1) {
    console.log('\n\x1b[92;1m\u2714 arguments object detected \x1b[93;1mWITHOUT \x1b[92;1marguments:\x1b[0m');
    console.log(argv);
    return;
  } 
  console.log('\n\x1b[92;1m\u2714 arguments object detected with arguments:\x1b[0m');
  console.log(argv);
}