// load express
var express = require("express");
var app = express();

// other modules
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");

// routing
var apiRouting = require("./app/routing/apiRoutes");
var staticRouting = require("./app/routing/htmlRoutes");
apiRouting.getAPI(app, path);
staticRouting.setStatics(app, path);

var PORT = 8080;

app.set('port', process.env.PORT || 8080);

// // route to survey
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname + htmlRoutes.surveyRoute));
// });

// //
// app.get("/api/friends", function(req, res) {
//     res.sendFile(path.join(__dirname + ))
// })

// // catch-all route to home
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname + htmlRoutes.homeRoute));
// });

app.listen(app.get("port"), function(){
    console.log("Listening on port " + app.get("port"));
})

// !!server declaration, handling, and listen!!
// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     fs.readFile(__dirname + routes.homeRoute, function(err, data) {
//         if (err) throw err;
//         console.log("Request made");
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end(data);
//     });
// }

// server.listen(PORT, function() {
//     console.log("Server is listening on PORT: " + PORT);
// });