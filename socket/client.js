const io = require("socket.io-client");

let socket = io.connect("http://localhost:3080");

socket.on("Welcome", (data) => {
  console.log("New client connected", data);
});
