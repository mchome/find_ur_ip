module.exports = function(app) {
    app.get('/', function (req, res) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        res.send(ip);
    });

    app.get('/json', function (req, res) {
        var ip = getip(req);
        data = {'ip': ip};
        var json = JSON.stringify(data);
        res.send(json);
    });

    app.get('/jsonp', function (req, res) {
        var ip = getip(req);
        data = {'ip': ip};
        var json = JSON.stringify(data);
        var jsonp = 'callback(' + json + ');';
        res.send(jsonp);
    });
};

function getip(req) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return ip
}
