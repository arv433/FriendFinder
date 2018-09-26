// load express
var express = require("express");
var app = express();

// install body-parser as middleware for express
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load path module
var path = require("path");

// API routing
require(path.join(__dirname, "app", "routing", "apiRoutes"))(app, path);

// Static pages routing
require(path.join(__dirname, "app", "routing", "htmlRoutes"))(app, path);

// Setting dynamic port
app.set('port', process.env.PORT || 8080);

// Listening app to port
app.listen(app.get("port"), function(){
    console.log("Listening on port " + app.get("port"));
});