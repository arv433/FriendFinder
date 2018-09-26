// load express
var express = require("express");
var app = express();

// install body-parser as middleware for express
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// path module
var path = require("path");

// API routing
var apiRouting = require("./app/routing/apiRoutes");
apiRouting.setAPI(app, path);
// Static pages routing
var staticRouting = require("./app/routing/htmlRoutes");
staticRouting.setStatics(app, path);

var PORT = 8080;

app.set('port', process.env.PORT || 8080);

app.listen(app.get("port"), function(){
    console.log("Listening on port " + app.get("port"));
});