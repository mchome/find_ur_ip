var findip = require('./libs/ip');
var location = require('./libs/location');

module.exports = function(router) {
    router.get('/', function(req, res) {
        res.send(api_list);
    });

    router.get('/ip', function (req, res) {
        res.send(ip_api_list);
    });

    router.get('/ip/:type' ,function (req, res){
        var ip = findip.getip(req);
        switch (req.params.type) {
            case 'raw':
                if (ip === undefined) {
                    res.send('this is not a valid ip address.');
                } else {
                    res.send(ip);
                }
                break;
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

    router.get('/location' ,function (req, res){
        var ip = findip.getip(req);
        switch (req.query.type) {
            case undefined:
                res.send(location_api_list);
                break;
            case 'full':
                var full = location.getfull(ip);
                res.send(full);
                break;
            case 'country':
                var country = location.getcountry(ip);
                res.send(country);
                break;
            case 'province':
                var province = location.getprovince(ip);
                res.send(province);
                break;
            case 'city':
                var city = location.getcity(ip);
                res.send(city);
                break;
            default:
                res.json({ message: 'hey, nothing here.'});
        }
    });

    // NOTE: support www-form-urlencoded & application/json
    router.post('/location', function (req, res) {
        var ip = req.body.ip;
        switch (req.query.type) {
            case undefined:
                res.json({ message: 'this is a location api.'});
                break;
            case 'full':
                var full = location.getfull(ip);
                res.send(full);
                break;
            case 'country':
                var country = location.getcountry(ip);
                res.send(country);
                break;
            case 'province':
                var province = location.getprovince(ip);
                res.send(province);
                break;
            case 'city':
                var city = location.getcity(ip);
                res.send(city);
                break;
            default:
                res.json({ message: 'hey, nothing here.'});
        }
    });
};


var api_list = {
    "ip api list": "/api/ip",
    "location api list": "/api/location"
};

var ip_api_list = {
    "message": "this is the ip api with GET",
    "raw result": "/api/ip/raw",
    "JSON result": "/api/ip/json",
    "JSONP result": "/api/ip/jsonp"
};

var location_api_list = {
    "message": "this is the location api with GET & POST",
    "full json with your ip": "GET /api/location?type=full",
    "country with your ip": "GET /api/location?type=country",
    "province with your ip": "GET /api/location?type=province",
    "city with your ip": "GET /api/location?type=city",
    "full json with spec ip": "POST /api/location?type=full",
    "country with spec ip": "POST /api/location?type=country",
    "province with spec ip": "POST /api/location?type=province",
    "city with spec ip": "POST /api/location?type=city"
};
