const config = `1. Open a web browser and navigate to https://console.developers.google.com/
2. Sign In with your Google Account
3. In your Google Developer Console, find the option to create a new API Project
4. Name your project
5. In your new project Dashboard, click "Library" and add 'Google Calendar API' to your project
6. Once enabled, navigate to your new project's credentials dashboard
7. Click "Create Credentials" > "OAuth client ID"
8. Fill out the necessary steps to generate your credentials
9. Download your credentials JSON file as 'credentials.json'
`

module.exports = () => {
  console.log(config);
}