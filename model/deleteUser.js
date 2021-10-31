var { connection, user_pool: db } = require("../database/db_pool");

var deleteUser = function (data, cb) {
  var sql = "DELETE FROM user WHERE mobile = ?";
  console.log("delete data", data, sql);
  db.getConnection(function (err, connection) {
    // connection.connect(function (err) {
    if (err) {
      connection.release();
      return cb(err, null);
    }

    connection.query(sql, [data.mobile], (err, result) => {
      console.log("result", result, err);
      connection.release();
      if (err) {
        console.log("err", err);
        return cb(err, null);
      } else {
        return cb(null, result);
      }
    });
  });
};

module.exports = { deleteUser };
