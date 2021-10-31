var express = require("express");
var app = express();
const port = 3080;
const http = require("http").createServer();
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.emit("Welcome", { name: "sanket Zende", age: 25, mobile: 879997891 });
});

http.listen(port, () => {
  console.log("sever is running on port", port);
});
