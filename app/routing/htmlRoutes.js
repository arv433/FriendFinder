module.exports = setStatics = function (appMod, pathMod) {
    // both static routes are set similarly, created function to reduce redundancy
    function setStaticRoute(route, fileName) {
        appMod.get(route, function (req, res) {
            res.sendFile(pathMod.join(__dirname, "..", "public", fileName + ".html"));
        });
    }
    // 3rd route
    setStaticRoute("/survey", "survey");
    // Last route
    setStaticRoute("*", "home");
}