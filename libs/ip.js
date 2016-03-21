var ipaddr = require('ip-address');
var ipv4 = ipaddr.Address4;


exports.getip = function (req) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (checkip(ip)) {
        return ip;
    } else {
        return;
    }
};

function checkip(ip) {
    var valid = new ipv4(ip).isValid();
    return valid;
}
