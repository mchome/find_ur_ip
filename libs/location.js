var ipip = require('./ipip')();

exports.getfull = function(ip) {
    var valid = checkip(ip);
    if (valid === false) {
        return JSON.stringify({ message: 'this is not a valid ip address.'});
    } else {
        var location = ipip(ip);
        return JSON.stringify(location);
    }
};

exports.getcountry = function(ip) {
    var valid = checkip(ip);
    if (valid === false) {
        return JSON.stringify({ message: 'this is not a valid ip address.'});
    } else {
        var location = ipip(ip);
        return JSON.stringify(location, ['country']);
    }
};

exports.getprovince = function(ip) {
    var valid = checkip(ip);
    if (valid === false) {
        return JSON.stringify({ message: 'this is not a valid ip address.'});
    } else {
        var location = ipip(ip);
        return JSON.stringify(location, ['province']);
    }
};

exports.getcity = function(ip) {
    var valid = checkip(ip);
    if (valid === false) {
        return JSON.stringify({ message: 'this is not a valid ip address.'});
    } else {
        var location = ipip(ip);
        return JSON.stringify(location, ['city']);
    }
};

function checkip(ip) {
    var ipaddr = require('ip-address');
    var ipv4 = ipaddr.Address4;
    if (ip === undefined) {
        return false;
    }
    var valid = new ipv4(ip).isValid();
    return valid;
}
