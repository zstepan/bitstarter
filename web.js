var fs = require("fs"),
    sys = require("sys");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.writeFileSync("index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
