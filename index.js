var express = require('express');
var app = express();
var routes = require('./routes')

var server = app.listen(8080, '192.168.1.11', function () {
    var host = server.address().address;
    var port = server.address().port;
    routes(app)

    console.log('App listening at http://%s:%s', host, port);
});
