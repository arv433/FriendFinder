exports.setStatics = function (appMod, pathMod) {
    function setStaticRoute(route, fileName) {
        appMod.get(route, function (req, res) {
            res.sendFile(pathMod.join(__dirname + "/../public/" + fileName + ".html"));
        });
    }
    // 3rd route
    setStaticRoute("/survey", "survey");
    // Last route
    setStaticRoute("*", "home");
}