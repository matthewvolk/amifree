# Creating a credentials.json file for Google's Calendar API
This tutorial will walk you through the steps required to generate a credentials.json file to use with the amifree application (https://github.com/matthewvolk/amifree)

### Instructions:
1. Navigate to https://console.developers.google.com
2. Sign in
3. Click the "Select a Project" dropdown menu:

![Select a Project Dropdown Location](https://i.imgur.com/I8sCt8m.png)
4. Select the option to create a "New Project"

![New Project Button Location](https://i.imgur.com/mals1kO.png)
5. Fill out the information required to create the project

![Fill out New Project form](https://i.imgur.com/soiyLH8.png)
6. From your new project's dashboard, click on "Library", usually located on the left hand sidebar menu

![Click on Library from menu](https://i.imgur.com/6B3wx5j.png)
7. Search for "Google Calendar API", and click on the API explicitly titled "Google Calendar API". There may be similar Calendar API's but we are looking specifically for the Google Calendar API.

![Click Google Calendar API](https://i.imgur.com/GVIagK3.png)
8. Enable the API

![Enable the API](https://i.imgur.com/CcqwOvR.png)
9. Navigate to the Credentials dashboard for your newly enabled API by clicking on one of the "Credentials" links from your API dashboard

![Navigate to the credentials dashboard by clicking Credentials](https://i.imgur.com/IvzykIj.png)
10. Click on the link to create a credential:

![Create new Credentials link](https://i.imgur.com/wmarSYO.png)
11. Make sure to fill out the application as follows. For the API you are using, choose Google Calendar API. For "Where will you be calling the API from", select "Other UI (e.g. Windows, CLI tool)", and for the data you will be accessing, select "User data".

![Fill out application for credentials](https://i.imgur.com/xSCtbR4.png)
12. Add a name to identify your OAuth 2.0 client ID

![Create an OAuth 2.0 client ID](https://i.imgur.com/IzbFeY6.png)
13. Fill out the desired information for the OAuth consent screen. Note, you are the only person who will theoretically see this screen.

![Fill out the consent screen information](https://i.imgur.com/YAbOJ0G.png)
14. Congrats! Download your newly generated credentials json file, and paste the absolute path to that file into the `amifree setup` prompt in your terminal window

![Download screen](https://i.imgur.com/6tjKRd9.png)
e.g.,
![terminal prompt](https://i.imgur.com/OVZjOk5.png)