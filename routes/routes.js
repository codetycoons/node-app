const express = require("express");
const router = express.Router();
const user = require("../controller/addUser.js");
const { upload } = require("../index.js");
console.log("upload", upload);
const { updateUser } = require("../controller/updateUser.js");
const { deleteUser } = require("../controller/deleteUser.js");
const { uploadMedia } = require("../controller/uploadMedia");
const { getUser } = require("../controller/getUser");

router.post("/user/add", user.addUser);
router.post("/user/update", updateUser);
router.post("/user/delete", deleteUser);
router.post("/user/upload", uploadMedia);
router.get("/user/get", getUser);
console.log("routes");

module.exports = router;
