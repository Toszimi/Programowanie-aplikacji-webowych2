import * as http from 'http'
import * as websocket from 'ws'

const server = http.createServer();

const socket = new websocket.Server({ server });

socket.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        broadcast(message.toString());
        console.log('received: ' + message);
    });
    ws.send('new connection');
});

function broadcast(data: string): void {

    socket.clients.forEach(client => {
        client.send(data);
    });
};

server.listen(9090);