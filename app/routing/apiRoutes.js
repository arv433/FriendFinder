exports.getAPI = function(appMod, pathMod) {
    var db = require("../data/friends.js");
    appMod.get("/api/friends", function(req, res) {
        res.send(db.data);
    });
}
// exports.updateDB = function(newUser, appMod, pathMod) {
//     appMod.post(, function (req, res) {

//     })
// }