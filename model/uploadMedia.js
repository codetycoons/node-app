var { user_pool: db } = require("../database/db_pool");
var uploadMedia = function (data, cb) {
  console.log("data model", data);
};

module.exports = { uploadMedia };
