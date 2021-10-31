const user = require("../model/getUser");
var getUser = function (req, res) {
  var data = req.query;
  console.log("data".data);
  user.getUser(data, function (err, result) {
    console.log("result ctr", result);
    if (err) {
      return res.send({ code: 404 });
    } else {
      return res.send({ code: 200, user: result });
    }
  });
};

module.exports = { getUser };
