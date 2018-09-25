var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");
var routes = require("./app/routing/htmlRoutes");

var app = express();

var PORT = 8080;

// manipulating path
var pathObj = path.parse(__filename);
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

// server declaration, handling, and listen
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    fs.readFile(__dirname + routes.surveyRoute, function(err, data) {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});