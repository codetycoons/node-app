const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var upload = require("express-fileupload");
const { port } = require("./config/config");
const routes = require("./routes/routes.js");
const localhost = "192.168.0.104";

app.use(upload());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", routes);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//   if (req.files) {
//     console.log(req.files);
//     var file = req.files.file;
//     var filename = file.name;
//     console.log(filename);
//     file.mv("./uploads/" + filename, function (err) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send("uploaded successfuklluy");
//       }
//     });
//   }
// });

app.listen(port, () =>
  console.log("Server is running on port : " + localhost, port)
);
