module.exports = setAPI = function (appMod, pathMod) {
    // load JSON object that holds seeds and collected data
    var dbFile = require(pathMod.join("..", "data", "friends.js"));

    // 1st route
    // set GET route to the contents of dbFile
    appMod.get("/api/friends", function (req, res) {
        res.json(dbFile);
    });

    // 2nd route
    // set POST route which responds dynamically then respond's with the user's profile:
    appMod.post("/api/friends", function (req, res) {
        var best;
        var ownIndex;
        for (var i = 0; i <= dbFile.length - 1; i++) {
            // If the name of this iteration is the same as the uploaded name...
            if (dbFile[i].name === req.body.name) {
                // ...remember the the iteration's index and skip to the next
                ownIndex = i;
                continue;
            } else {
                var perScore = dbFile[i].scores;
                var difference = 0;
                for (var j = 0; j <= perScore.length -1; j++) {
                    // compound the absolute difference between the uploaded scores and the iteration's scores onto difference
                    difference += Math.abs(req.body.scores[j] - perScore[j]);
                }
                // if best was assigned before...
                if (!(best == null)) {
                    // if best's difference is greater than the difference on this iteration...
                    if (best.diff > difference) {
                        // ...make this iteration the new best, remembering the index and the difference
                        best = {index: i, diff: difference};
                        // if best's difference is the same as the difference on this iteration...
                    } else if (best.diff === difference && Math.floor(Math.random() * 2) === 0) {
                        // ...randomly choose between the two and assign the new best
                        best = {index: i, diff: difference};
                    }
                // if there was not yet a best assigned...
                } else {
                    // ...assign this iteration to best
                    best = {index: i, diff: difference};
                }
            }
        }
        // send the response through the modal
        res.json(dbFile[best.index]);

        // if this user did not take the quiz before, add them to the database
        if (ownIndex == null) {
            dbFile.push(req.body);
        // if the user had the same name (assuming that it is the same person trying to match again)...
        } else {
            // update that user's photo and scores
            dbFile[ownIndex].photo = req.body.photo;
            dbFile[ownIndex].scores = req.body.scores;
        }
        res.end();
    });
}