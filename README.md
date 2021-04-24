# A Series of Untold Events

This mini autobio adventure game was built to be a future feature on my software developing portfolio website (currently in development). The game provides a sneak peak into untold events and odd elements from my childhood for viewers of my portfolio to enjoy.

There are 2 repositories needed to run this game: autobio-adventure & autobio-adventure-api. Please follow the getting started guide in each and run both of their servers at the same time.

Getting started:
```
create a new MongoDB database called 'adventure'

in server.js:      
  uncomment  // require('./model/adventure') to load the scenes into the database
  then comment this out again to prevent duplicating all the scenes this collection

npm install
npm start

play the game

once you add a player, the 'users' collection is auto created in the database
in Robo3T, run db.getCollection('users').createIndex({"name:"text"},{unique:true})
this prevents player duplicates in your database
