var os = require('os');

module.exports = {
  getLocalIp: function() {
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
      for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
          addresses.push(address.address);
        }
      }
    }
    if (addresses.length > 0) {
      return addresses[0];
    }
  },

  merge: function(opts, defaults) {
    opts = opts || {};
    for (var item in defaults) {
      if (opts.hasOwnProperty(item)) {
        defaults[item] = opts[item];
      }
      opts[item] = defaults[item];
    }

    return opts;
  }

};
