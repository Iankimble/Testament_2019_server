# Testament

\***\*Digital Prayer Journal and daily inspiration generator \*\***

### Table of Contents

1. Motivation

2. Installation and setup

3. Tools and Technology

4. Usage

5. Features

6. Todos

### Motivation

When I decided to puruse web development it came about at a very turbulant time in my life. There were many hardships that I had experienced from the time leading up to me enrolling into the University of Pennslvania's coding boot camp, working 2 jobs and to afford to attend the program while finding time to prepare myself with studying basic coding concepts, to lossing my primary source of income during the bootcamp, to completing the bootcamp and facing a decent amount of rejection in so far as finding an oppurtunity to showcase my skills. A big part of me not giving up was my faith. I built this tool for myself and others who may need the spiritual outlet to write down their thoughts and prayers and to be inspired by the word.

### Installation and Setup

To run application you will need Node and NPM installed on your machine.

To run test build of appliation: **npm test**

To start server: **npm start** (application will run on at http://localhost:3000 when running locally)

To create a production build: **npm run build**

### Tools and Technology

This is a CRUD application built with React.js as the frontend framework and express.js for the serverside logic.
for CSS styling this application uses the react-bootstrap library. User entries are stored using mongoDB.
I've also built a custom endpoint with passages from the bible using mongoDB as the database.

### Usage

This application is intended to be a digital journal for spirtitual reflections.

### Features

1. **Prayer Journal**: The primary feature of this application is the prayer journal. Users are able to create accounts,
   Create, read, update and delete their entries.

2. **Daily passage**: The secondary feature of this application is a custom API that I built to send verses stored in a database to the users homepage to provide hope and motivation. Currently a new, random passage is sent to the users dashboard every 10 seconds for the purposes of testing.

### Todos

1. Timer for bible verses: Need to resolve the intervals of time for when a old passage will be removed and a new one sent to the users dashboard.

2. Cleaner Code: Need to clean code and organize files.

3. Styling: Need to re-address styling to make more polished and dynamic.

4. Segment frontend-backend logic: currently, the applications client side and server side logic are being run on heroku. Becuase of the nature of heroku's servers going into sleep mode when not active. It causes the website to boot up slowly. For the purpose of having clean, modularized code, the front end will be moved to a seperate repo.
