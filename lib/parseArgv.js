module.exports = (argv) => {
  if (!argv) return console.log("\x1b[31;1m%s\x1b[0m", "argv not found!");
  console.log('\n\x1b[92;1m\u2714 arguments detected:\x1b[0m');
  console.log(argv);
}