import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({host: '0.0.0.0', port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    wss.clients.forEach(function(client) {
      if(client != ws){
        client.send(data.toString());
      }
    });
  });
});