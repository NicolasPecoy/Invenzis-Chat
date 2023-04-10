const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;
const server = require("http").createServer(app);

app.use(express.static(__dirname + "/public"));

server.listen(port);