var friends = require("../data/friends");
module.exports = function(app) {


  app.get("/api/thefriends", function(req, res) {
    res.json(tables);
  });



};
