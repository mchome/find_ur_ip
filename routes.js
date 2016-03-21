// var location = require('./libs/location');
var findip = require('./libs/ip');

module.exports = function(router) {
    router.get('/', function(req, res) {
        res.json({ 'message': 'hooray! welcome to our api!' });
    });

    router.get('/ip', function (req, res) {
        var ip = findip.getip(req);
        if (ip === undefined) {
            res.send('this is not a valid ip address.');
        } else {
            res.send(ip);
        }
    });

    router.get('/ip/:type' ,function (req, res){
        var ip = findip.getip(req);
        switch (req.params.type) {
            case 'json':
                if (ip === undefined) {
                    res.json({ 'message': 'this is not a valid ip address.' });
                } else {
                    res.json({ 'ip': ip});
                }
                break;
            case 'jsonp':
                if (ip === undefined) {
                    res.send('callback({ "message": "this is not a valid ip address." });');
                } else {
                    data = {'ip': ip};
                    var json = JSON.stringify(data);
                    var jsonp = 'callback(' + json + ');';
                    res.send(jsonp);
                }
                break;
            default:
                res.json({ 'message': 'hey, nothing here.'});
        }
    });

    // TODO need to route the local
    router.get('/local/:type' ,function (req, res){
        switch (req.params.type) {
            case 'json':
                break;
            case 'jsonp':
                break;
            default:
                res.json({ message: 'hey, nothing here.'});
        }
    });
};
