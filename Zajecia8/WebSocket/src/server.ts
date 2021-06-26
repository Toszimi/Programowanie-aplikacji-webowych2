import * as http from 'http'
import * as websocket from 'ws'

const server = http.createServer();
//server z socket
const socket = new websocket.Server({ server });
//zdarzenie na połączenie
socket.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        broadcast(message.toString());  //wysyła do wszyskiech klientów z konkretnym socket    
        console.log('received: ' + message);
    });
    ws.send('You are connected :)');
});

function broadcast(data: string): void {
    //na każdym kliencie wykonany send
    socket.clients.forEach(client => {
        client.send(data);
    });
};

server.listen(8080);