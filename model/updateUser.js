var { connection, user_pool: db } = require("../database/db_pool");
var updateUser = function (data, cb) {
  console.log("model data", data);
  db.getConnection(function (err, connection) {
    // connection.connect(function (err) {
    if (err) {
      connection.release();
      return cb(err, null);
    }
    var fieldValues = [];
    var fieldsToUpdate = [];

    var fields = {
      fname: "fname",
      lname: "lname",
      age: "age",
      email: "email",
    };

    for (var key in fields) {
      if (data[key] != undefined) {
        fieldsToUpdate.push(fields[key] + " = ?");
        fieldValues.push(data[key]);
      }
    }

    fieldValues.push(data.mobile);

    var sql =
      "UPDATE user SET " + fieldsToUpdate.join(", ") + " WHERE mobile = ?";

    connection.query(sql, fieldValues, (err, result) => {
      connection.release();
      console.log("err", err, sql);
      console.log("result", result);
      if (err) {
        return cb(err, null);
      } else {
        return cb(null, result);
      }
    });
  });
};

module.exports = { updateUser };
