
var friendsList = require("../data/friends.js");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    function indexOfSmallest(a) {
        var lowest = 0;
        for (var i = 1; i < a.length; i++) {
         if (a[i] < a[lowest]) 
            lowest = i;
        }
        return lowest;
       }

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        console.log(friendsList);
       // req.body.scores=req.body.scores.map(Number);
        var currentUser=req.body.scores;
        var totalDifference=0;
        var totalDiffArray=[];
        friendsList.forEach(function(element,index){
            totalDifference=0;
            for(var i=0;i<currentUser.length;i++){
                totalDifference+=Math.abs(Number(currentUser[i])-Number(element.scores[i]));
            }
            totalDiffArray.push(totalDifference);
        });

        var matchIndex=indexOfSmallest(totalDiffArray);
        console.log(totalDiffArray); 
        friendsList.push(req.body);     
        res.json(friendsList[matchIndex]);  
        
        
       // res.json(true);
    });

    app.get("/api/clear", function (req,res) {
       // Empty out the arrays of data
        friendsList = [];
        res.json(friendsList);

        //console.log(friendsList);
    });
};
