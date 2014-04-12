var http = require('http');
var connect = require('connect');

var app = connect();
app.use(connect.static('public'));
http.createServer(app).listen(4242);
