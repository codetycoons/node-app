var user = require("../model/updateUser");
var updateUser = function (req, res) {
  var data = req.body;
  console.log("update data", data);
  user.updateUser(data, function (err, result) {
    if (err) {
      return res.send(404);
    } else {
      return res.send(result);
    }
  });
};

module.exports = { updateUser };
