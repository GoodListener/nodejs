var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello');

}).listen(8080, function () {
   console.log('Server is running');
});
