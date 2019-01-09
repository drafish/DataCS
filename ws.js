const WebSocket = require('ws')


function initWs (server) {
  const ws = new WebSocket.Server({server})
  ws.on('connection', function connection(socket) {
    console.log('server: receive connection.');
    
    socket.on('message', function incoming(message) {
        console.log('server: received: %s', message);
    });

    socket.send('world');
});
}

module.exports = initWs
