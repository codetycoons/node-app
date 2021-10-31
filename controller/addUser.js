var user = require("../model/addUser");
var addUser = function (req, res) {
  var data = req.body;
  user.addUser(data, function (err, result) {
    if (err) {
      console.log("err", err);
      return res.send(404);
    } else {
      return res.send(result);
    }
  });
};

module.exports = { addUser };
