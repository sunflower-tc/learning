var util = require('./myLib').util;

var http = require('http');


var server = http.createServer(function(req, res) {
  res.write("<h1>Get connected</h1>");
  util.readObj(req.headers, res);
});

server.listen(80);
