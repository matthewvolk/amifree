const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const config = `\x1b[1m
                 _  __              ___  
                (_)/ _|            |__ \\ 
  __ _ _ __ ___  _| |_ _ __ ___  ___  ) |
 / _\` | '_ \` _ \\| |  _| '__/ _ \\/ _ \\/ / 
| (_| | | | | | | | | | | |  __/  __/_|  
 \\__,_|_| |_| |_|_|_| |_|  \\___|\\___(_) 
\x1b[0m`

module.exports = () => {
  console.log(config);
  process.stdout.write(`\x1b[1m1. Open a web browser and navigate to: \x1b[0m`)
  console.log(`\x1b[34;4m\nhttps://console.developers.google.com/\x1b[0m`);
  process.stdout.write(`\x1b[1m2. Follow steps 1 - 3 under "Get started": \x1b[0m`)
  console.log(`\x1b[34;4m\nhttps://support.google.com/cloud/answer/3465889?hl=en\x1b[0m`);
  console.log('\x1b[1m3. Navigate to the Credentials page, select Create credentials.\x1b[0m');
  console.log('\x1b[1m4. Select OAuth client ID.\x1b[0m');
  console.log('\x1b[1m5. Supply the requested information.\x1b[0m');
  console.log('\x1b[1m6. Click Save to return to the Credentials screen.\x1b[0m');
  console.log('\x1b[1m7. Select Other for the Application type.\x1b[0m');
  console.log('\x1b[1m8. Download the JSON file containing your credentials.\x1b[0m');

  readline.question("\nDrag the downloaded credentials JSON file into this terminal to get the path and then press ENTER:\n", (path) => {
    console.log(`Path: ${path}`);
    readline.close();
  });
}