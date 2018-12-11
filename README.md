![amifree](https://i.imgur.com/d5KjzJb.png "amifree")

---
A Node.js CLI utility to retrieve available time slots on your Google Calendar

## Usage:
Running this application for the first time:

1. $ git clone https://github.com/matthewvolk/amifree.git folder-name/
2. $ cd folder-name/
3. Open a web browser and navigate to https://console.developers.google.com/
4. Sign In with your Google Account
5. Click "Select a Project" in the top left of the Dashboard to **create a new API Project**
6. Name your project
7. In your new project Dashboard, click "Library" and **add Google Calendar API** to your project
8. Once enabled, navigate to your new project's credentials dashboard
9. Click "Create Credentials" > "OAuth client ID"
10. Fill out the necessary steps to generate your credentials
11. Download your credentials JSON file **as 'credentials.json'**
12. $ mv /Your/download/path/credentials.json folder-name/
13. $ ./bin/amifree

## Project Background/TODO:
#### THE PROBLEM:
A Node.js CLI utility to retrieve available time slots on your Google Calendar

I needed a quicker solution to list out my Google Calendar availability than manually checking for open time slots. I tried services like Calend.ly but my clients were frustrated when I sent them a link to schedule time with me. I didn’t want to make them think I was too lazy to look at my own calendar.

I am in the process of creating an NPM package called amifree to remedy this problem. This page currently serves as a Privacy Policy required by Google so that users know how I am using their data through the Google API.

When I am done building the application, I will create a write-up here.

#### THE GOAL: 
The goal is to be more convenient than looking at your Calendar

#### CURRENT PROGRESS:
* Successfully authorize users

#### TO DO:
* Refactor API to handle data manipulation from command line arguments

#### Issues/Security Concerns:
* Right now, all users are forced to create their own Google API credentials for this project. I want to look into a way to have everyone use my Google API credentials without giving them access to my file.

