var axon = require('axon');
var sock = axon.socket('push');

sock.bind(3000);
console.log('push server started');

var counter = 0;

setInterval(function () {
  sock.send('hello ' + counter++);
}, 150);
