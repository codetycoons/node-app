var mysql = require("mysql");
var { connection, user_pool: db } = require("../database/db_pool");

var addUser = function (data, cb) {
  var query = "select * from user where mobile = ?";
  db.getConnection(function (err, connection) {
    if (err) {
      connection.release();
      return cb(err, null);
    }
    connection.query(query, [data.mobile], (err, result) => {
      if (err) {
        connection.release();
        return cb(err, null);
      }
      console.log("result of mob", result);
      if (result.length > 0) {
        connection.release();
        return cb(null, { code: 200, message: "user already exist!!" });
      } else {
        var sql =
          "insert into user (fname,lname,age,mobile,email) values(?,?,?,?,?)";

        // connection.connect(function (err) {
        //   if (err) {
        //     return cb(err, null);
        //   } else {
        connection.query(
          sql,
          [data.fname, data.lname, data.age, data.mobile, data.email],
          (err, result) => {
            connection.release();
            if (err) {
              console.log("err", err);
              // dbConnection.release();
              return cb(err, null);
            }
            console.log("successfull", result);
            // dbConnection.release();
            return cb(null, result);
          }
        );
        // }
        // });
      }
    });
  });
};

module.exports = { addUser };
