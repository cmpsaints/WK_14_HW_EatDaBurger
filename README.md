# WK_14_HW_EatDaBurger

App that allows user to create custom burgers, eat them, and view both eaten & uneaten ones

## Live App


## Screenshot

![screenshot 2019-01-06 19 30 24](...)

## Instructions
Create & add burgers and eat them. Eaten burgers are shown on the right.

## Functionality Requirements
- Allow user to create/add burgers
- Display existing/added burgers on the left
- Allow user to eat each burger with EAT buttons
- Display eaten burgers on the right
- Store all burgers & whether eaten or uneaten (state) in a database

## Code Structure
- main file `server.js` : initial server setup & contains most of our dependencies
- `schema.js` and `seeds.js` : creates database & populates it with data
- `connection.js` : creates connection to database
- ORM : for simpler methods to query database (read, write, update)
- controller : provides a fully functional app experience : takes in data responses returned from queries, routes & renders the responses to user via Handlebars
- GET request : retrieves burgers
- POST request : adds burgers (adds to database also)
- PUT request : updates status of burgers from "uneaten" to "eaten" (updates to database also)

## Technologies
- Node JS framework
- Express module in Node
- Handlebars module for Express
- MVC