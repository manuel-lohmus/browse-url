"use strict";
var http = require("http");
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
}).listen(port);

var url = "http://localhost:" + port + "/";

/* longer version */
var browseURL = require("./index.min.js");
var childProcess = browseURL(url);
childProcess.on("exit", function (code) {
    setTimeout(function () { process.exit(); }, 5000);
});

/* short version */
//require("./index.min.js")(url);