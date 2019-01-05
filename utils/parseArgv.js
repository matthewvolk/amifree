module.exports = (argv) => {

  argv = require('minimist')(process.argv.slice(2));

  if (!argv) return console.log("\n\x1b[31;1m%s\x1b[0m", "\u2718 No arguments found!");
  console.log('\n\x1b[92;1m\u2714 arguments detected:\x1b[0m');
  console.log(argv);
}