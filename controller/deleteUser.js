var user = require("../model/deleteUser");
var deleteUser = function (req, res) {
  var data = req.body;
  user.deleteUser(data, function (err, result) {
    if (err) {
      console.log("err", err);
      return res.send(404);
    } else {
      return res.send(result);
    }
  });
};

module.exports = { deleteUser };
