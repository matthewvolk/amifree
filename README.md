<!-- ![amifree](https://i.imgur.com/d5KjzJb.png "amifree") -->
![amifree-gif](https://i.imgur.com/FS7QYIk.gif)

---
A Node.js CLI utility to retrieve available time slots on your Google Calendar.

## Prerequisites
1. Node.js & NPM
2. Knowledge of Google API's (e.g., ability to create an application in Google Developer Console, add an API, generate OAuth Credentials)

## Usage:
Running this application for the first time:

1. Follow this tutorial to generate a Google Calendar API: https://github.com/matthewvolk/amifree/tree/master/docs/oauth-tutorial
2. `$ git clone https://github.com/matthewvolk/amifree.git amifree/`
3. `$ cd amifree/`
4. `$ npm install`
5. `$ bin/amifree setup`

## The Goal: 
When the application is complete, the user will be able to:
1. Run `npm install amifree`
2. Run `amifree setup`
3. Application lists out steps to generate an appropriate Google OAuth application, read credentials.json file, and asks you for the Google Calendar ID of the calendar you want to read. 
4. Run `amifree` for a list of available time slots from the Google Calendar associated with the Google Calendar ID above. 

## To Do:
* If `credentials.json` file already exists and user runs `amifree setup`, ask "Would you like to overwrite your current credentials file?"
* `amifree --this week`: As well as other commands like this, I want the user to be able to query their calendar for a wider range of dates
* `amifree --changeCalendarID newcalendarid@gmail.com`: Allows user to change the Google Calendar ID you want to read from. 

#### Issues/Security Concerns:
* Right now, all users are forced to create their own Google API credentials for this project. I'm not sure there's any better way to do this given the way that OAuth 2.0 is written, but any and all PR's are welcome. 
