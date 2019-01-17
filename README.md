<!-- ![amifree](https://i.imgur.com/d5KjzJb.png "amifree") -->
![amifree-gif](https://i.imgur.com/FS7QYIk.gif)

---
A Node.js CLI utility to retrieve available time slots on your Google Calendar

## Prerequisites
1. Node.js & NPM
2. Knowledge of Google API's (e.g., ability to create an application in Google Developer Console, add an API, generate OAuth Credentials)

## Usage:
Running this application for the first time:

1. Open a web browser and navigate to https://console.developers.google.com/
2. Sign In with your Google Account
3. In your Google Developer Console, find the option to **create a new API Project**
4. Name your project
5. In your new project Dashboard, click "Library" and **add 'Google Calendar API'** to your project
6. Once enabled, navigate to your new project's credentials dashboard
7. Click "Create Credentials" > "OAuth client ID"
8. Fill out the necessary steps to generate your credentials
9. Download your credentials JSON file **as 'credentials.json'**
10. `$ git clone https://github.com/matthewvolk/amifree.git folder-name/`
11. `$ cd folder-name/`
12. `$ npm install`
13. `$ mv /Your/download/path/credentials.json folder-name/`
14. `$ touch .env`
15. `$ vim .env` and add your primary calendar email address as CALENDAR_ID="email@email.com"
16. `$ npm install`
17. `$ ./bin/amifree`

## The Goal: 
The workflow will be as follows when the application is complete:
1. Run `npm install amifree`
2. Run `amifree config`
3. Application lists out steps to generate an appropriate Google OAuth application, read credentials.json file, and asks you for the Google Calendar ID of the calendar you want to read. 
4. Run `amifree` for a list of available time slots from the Google Calendar associated with the Google Calendar ID above. 

## To Do:
* `amifree config`: Walks user through the process of creating Calendar API app in Google Developer console, generating and downloading credentials, passing credentials to CLI application for registration
* `amifree --this week`: As well as other commands like this, I want the user to be able to query their calendar for a wider range of dates
* `amifree --changeCalendarID newcalendarid@gmail.com`: Allows user to change the Google Calendar ID you want to read from. 

#### Issues/Security Concerns:
* Right now, all users are forced to create their own Google API credentials for this project. I want to look into a way to have everyone use my Google API credentials without giving them access to my file.
