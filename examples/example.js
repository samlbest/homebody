var h = require('../lib/homebody.js');
var homebody = new h({});

homebody.getConnectedMacAddrs(function(result) {
  console.log(result);
}); 
