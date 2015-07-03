'use strict';

// Dependencies
var proc = require('child_process')
var utils = require('./utils.js');


function Homebody(opts) {
  if (!!this instanceof Homebody) {
    return new Homebody(opts);
  }

  var defaults = {
    nmap: '/usr/local/bin/nmap', 
    scripts: '/usr/local/bin/nmap/scripts'
  };

  this.options = utils.merge(opts, defaults);
};


Homebody.prototype.getConnectedMacAddrs = function() {
  var network = utils.getLocalIp();
  var last = network.lastIndexOf(".")
  var ip = network.substring(0, last) + ".*";

  var command = "nmap -sP -n " + ip + "| grep  -o -i '[0-9A-F]\\{2\\}\\(:[0-9A-F]\\{2\\}\\)\\{5\\}'";
  var e = proc.exec(command);
  var macAddresses = [];

  e.stdout.on('data', function(chunk) {
    var nextAddresses = chunk.split('\n');
    for (var i = 0; i < nextAddresses.length; ++i) {
      if (nextAddresses[i]) {
        macAddresses.push(nextAddresses[i]);
      }
    }
  });

  e.stdout.on('end', function() {
    console.log(macAddresses);
  });
};


module.exports = Homebody;
