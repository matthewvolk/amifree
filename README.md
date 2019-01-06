<!-- ![amifree](https://i.imgur.com/d5KjzJb.png "amifree") -->
<div style="text-align:center"><img src ="https://i.imgur.com/jz50uYK.gif" /></div>

---
A Node.js CLI utility to retrieve available time slots on your Google Calendar

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
10. <code>$ git clone https://github.com/matthewvolk/amifree.git folder-name/</code>
11. <code>$ cd folder-name/</code>
12. <code>$ npm install</code>
13. <code>$ mv /Your/download/path/credentials.json folder-name/</code>
14. <code>$ touch .env</code>
15. <code>$ vim .env</code> and add your primary calendar email address as CALENDAR_ID="email@email.com"
16. <code>$ npm install</code>
17. <code>$ ./bin/amifree</code>

## Project Background/TODO:
#### THE PROBLEM:
A Node.js CLI utility to retrieve available time slots on your Google Calendar

I needed a quicker solution to list out my Google Calendar availability than manually checking for open time slots. I tried services like Calend.ly but my clients were frustrated when I sent them a link to schedule time with me. I didn’t want to make them think I was too lazy to look at my own calendar.

I am in the process of creating an NPM package called amifree to remedy this problem. This page currently serves as a Privacy Policy required by Google so that users know how I am using their data through the Google API.

When I am done building the application, I will create a write-up here.

#### THE GOAL: 
The goal is to be more convenient than looking at your Calendar. The workflow will be as follows when the application is complete:
1. User runs <code>npm install amifree</code>
2. User runs <code>amifree</code>
3. Application lists out steps to generate an appropriate Google OAuth application (also steps to download OAuth Credentials JSON file from Google Developer Console)
5. User runs <code>amifree --register-oauth /Downloads/path/to/credentials.json</code>
6. Application reads JSON file and stores it in project directory
7. User runs <code>amifree</code> and successfully configures application following CLI instructions
8. User runs <code>amifree --calendarId googlecalendarid@gmail.com</code> entering a calendar ID associated with the account authorized in step 7 above
9. Application stores calendarId in .env file

#### TO DO:
* Refactor API to handle data manipulation from command line arguments
* Throw error message alerting user to create a .env if they try to run app w/o one

#### Issues/Security Concerns:
* Right now, all users are forced to create their own Google API credentials for this project. I want to look into a way to have everyone use my Google API credentials without giving them access to my file.

