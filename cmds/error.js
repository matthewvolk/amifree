module.exports = (cmd) => {
console.log(`
\x1b[31;1m\u2718 ERROR: command not found: "${cmd}"
`)
require('./help')();
}