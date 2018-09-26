var relPath = "../data/friends.js";
var dbFile = require(relPath);

exports.setAPI = function (appMod, pathMod) {
    appMod.get("/api/friends", function (req, res) {
        res.json(dbFile.data);
    });
    appMod.post("/api/friends", function (req, res) {
        var best;
        for (var i = 0; i <= dbFile.data.length - 1; i++) {
            var perScore = dbFile.data[i].scores;
            var difference = 0;
            for (var j = 0; j <= perScore.length -1; j++) {
                difference += Math.abs(req.body.scores[j] - perScore[j]);
            }
            if (best) {
                if (best[1] > difference) {
                    best = [i, difference];
                } else if (best[1] === difference) {
                    if (Math.floor(Math.random() * 2) === 0) {
                        best = [i, difference];
                    }
                }
            } else {
                best = [i, difference];
            }
        }
        // TODO: respond with the the match's info using best[0]
        dbFile.data.push(req.body);
    });
}