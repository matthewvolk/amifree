module.exports = (cmd) => {
console.log(`
\x1b[31;1m\u2718 "${cmd}" is not a valid command! 
`)
require('./help')();
}