module.exports = (argv) => {
  if (!argv[2]) return console.log("\n\x1b[31;1m%s\x1b[0m", "\u2718 No arguments found!");
  console.log('\n\x1b[92;1m\u2714 arguments detected:\x1b[0m');
  for (var i = 2; i < argv.length; i++) {
    console.log(argv[i]);
  }
}