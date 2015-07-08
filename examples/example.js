var h = require('../lib/homebody.js');
var homebody = new h({});

homebody.getConnectedMacAddrs(function(result) {
  console.log(result);
}); 

homebody.isMacConnected('B0:05:94:04:CA:75', function(result) {
  console.log('mac connected: ' + result);
});
