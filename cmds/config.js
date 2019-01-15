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
  console.log(`\x1b[34;4mhttps://console.developers.google.com/\x1b[0m`);
  console.log('\x1b[1m2. From the project drop-down, choose Create a new project, enter a name for the project, click Create.\x1b[0m');
  console.log('\x1b[1m3. Click "Library" from the navigation menu on the left and add Google Calendar API to your project.\x1b[0m');
  console.log('\x1b[1m4. On the Credentials page, select Create credentials, then select OAuth client ID.\x1b[0m');
  console.log('\x1b[1m5. Supply the requested information, and click Save to return to the Credentials screen.\x1b[0m');
  console.log('\x1b[1m6. Select Other for the Application type, and enter any additional information required.\x1b[0m');
  console.log('\x1b[1m7. Navigate back to your credentials dashboard, and download the JSON file containing your credentials.\x1b[0m');
}