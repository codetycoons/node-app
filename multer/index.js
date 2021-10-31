var express = require("express");
const app = express();
const port = 3000;

var multer = require("multer");
// var upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("hello people");
});

app.listen(port, () => {
  console.log("listening to the port: " + port);
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("req", req);
    console.log("file", file);
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/single", upload.single("profile"), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});
