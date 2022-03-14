# Getting Started with Ticket App

This project was made by Harshit Gajjar for Project 1 of PDP.

## Installation

1. Clone the repository
2. Open it in your favourite editor
3. Run yarn install/ npm install to install node modules
4. npm start -> to start the application

## Features
1. Home Page -> Where users can see what the website can do
2. Movies Page -> Where users can select the theatre and city and accordinly movies will be rendered
3. Sports Page -> Shows sports matches of different category and users can book it
4. Hackathons Page -> Shows all the hackathons in the city selected by the user
5. Register Events Page -> Here users can enter hackathon details and it will be persisted

## Implementing Persist Storage
Have made use of Localstorage for persist storgae functionality

## How does the Persist Storage works
1. Initially in the hackathons page, users may see some data of hackathons for a given city
2. They can go to the register-events page and can register for hackathon by providing details
3. They need to provide basic details and for the poster, they need to copy the **Image Address** of the image they want to show (e.g https://i.pinimg.com/originals/be/e9/a6/bee9a6a24a090918f51444a99f9dd1c8.jpg)
4. Once they click submit, that data is stored and persisted.
5. So now, if they go to hackathons page they can see their hackathon event for the given city they entered
6. Even upon switching the tabs in website or refreshing the pages, still the data will be seen, because it is persisted

## Design Document Link
This is the link: https://github.com/HarshitG24/Project1-DesignDocument
1. Please clone the repo above and checkout to main branch
2. This repo should contain the pdf document

## Deployed version of the website
This website is deployed using surge, Here is the link: http://ragged-volleyball-ticket.surge.sh/

## JSDoc and HTML page
JSDoc has been added to all the components and inside the **/docs** folder, contains the **index.html** file, which will contain the documentation
