var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var router = express.Router();
routes(router);
app.use('/api', router);

var server = app.listen(8080, '192.168.1.11', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
