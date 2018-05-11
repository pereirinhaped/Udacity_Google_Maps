var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('../src/resources/C1.kml', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.write(data);
    res.end();
  });
}).listen(8080);