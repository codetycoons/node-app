var mysql = require("mysql");

// Initialize pool
var user_pool = mysql.createPool({
  connectionLimit: 10,
  // host: "192.168.0.105",
  host: "localhost",
  user: "root",
  password: "Root@12345",
  database: "users",
  debug: false,
});

var connection = mysql.createConnection({
  //   host: "192.168.0.104",
  //port:'3306',
  host: "localhost",
  user: "root",
  password: "Root@12345",
  database: "users",
});

module.exports = {
  user_pool,
  connection,
};
