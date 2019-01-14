var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");
var path = require("path");

// ** Express setup **
var app = express();
var PORT = process.env.PORT || 3000;

// ** middleware **
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ** rendering engine & handlebars setup **
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ** static routes & files (middleware) **
app.use(express.static(__dirname + "/public"));
app.use("/", router);

// ** start server **
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});