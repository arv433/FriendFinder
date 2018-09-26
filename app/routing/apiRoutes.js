var relPath = "../data/friends.js";
var dbFile = require(relPath);

exports.setAPI = function (appMod, pathMod) {
    appMod.get("/api/friends", function (req, res) {
        res.sendFile(pathMod.join(__dirname + relPath));
    });
    appMod.post("/api/friends", function (req, res) {
        dbFile.data.push(req.body);
    });
}