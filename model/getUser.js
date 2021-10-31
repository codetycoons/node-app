const { user_pool: db } = require("../database/db_pool");

var getUser = function (data, cb) {
  db.getConnection(function (err, connection) {
    if (err) {
      connection.release();
      return cb(err, null);
    } else {
      var sql = "select * from user where mobile = ?";
      connection.query(sql, data.mobile, function (err, result) {
        console.log("model result", result, data);
        connection.release();
        if (err) {
          return cb(err, null);
        } else {
          return cb(null, result);
        }
      });
    }
  });
};

module.exports = { getUser };
