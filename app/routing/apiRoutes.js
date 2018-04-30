
var friendsList = require("../data/friends");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    app.post("/post/friends", function (req, res) {
        friendsList.push(req.body);
        res.json(true);
    });

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friendsList = []

        console.log(friendsList);
    });
};
