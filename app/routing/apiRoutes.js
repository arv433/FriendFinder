exports.setAPI = function (appMod, pathMod) {
    var relPath = pathMod.join("..", "data", "friends.js");
    var dbFile = require(relPath);
    appMod.get("/api/friends", function (req, res) {
        res.json(dbFile.data);
    });
    appMod.post("/api/friends", function (req, res) {
        var best;
        var ownIndex;
        for (var i = 0; i <= dbFile.data.length - 1; i++) {
            if (dbFile.data[i].name === req.body.name) {
                ownIndex = i;
                continue;
            } else {
                var perScore = dbFile.data[i].scores;
                var difference = 0;
                for (var j = 0; j <= perScore.length -1; j++) {
                    difference += Math.abs(req.body.scores[j] - perScore[j]);
                }
                if (best) {
                    if (best.diff > difference) {
                        best = {index: i, difference: difference};
                    } else if (best.diff === difference) {
                        if (Math.floor(Math.random() * 2) === 0) {
                            best = {index: i, difference: difference};
                        }
                    }
                } else {
                    best = {index: i, diff: difference};
                }
            }
        }

        res.json(dbFile.data[best.index]);

        if (ownIndex == null) {
            dbFile.data.push(req.body);
        } else {
            dbFile.data[ownIndex].photo = req.body.photo;
            dbFile.data[ownIndex].scores = req.body.scores;
        }
    });
}