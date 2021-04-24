# A Series of Untold Events

this mini text game was built to be a feature on my software developing portfolio website (currently in development)
through this game, everyone checking out my portfolio website can have a sneak peak into untold events and odd elements from my childhood

textgame and textgame-api are the repositories needed to run this game
please follow the getting started guide in each and run both of their servers at the same time

Getting started:
```
create a new MongoDB database called 'adventure'

in server.js      uncomment  // require('./model/adventure') to load the scenes into the database
                  then comment this out again to prevent duplicating all the scenes this collection

npm install
npm start

play the game

once you add a player, the 'users' collection is auto created in the database, run db.getCollection('users').createIndex({"name:"text"},{unique:true}) in Robo3T
this prevents player duplicates in your database
