let socket = new WebSocket("ws://localhost:9090");
socket.onopen = function (e) {
    socket.send("To jest socket");
};
//
socket.onmessage = function (event) {
    const msg = document.getElementById('messages')
    const item = document.createElement('li');
    item.textContent = event.data;//zawartośc wysłana przez websocket
    msg?.appendChild(item);
};
//wysyłanie
document.getElementById('send').addEventListener('click', () => {
    socket.send((<HTMLInputElement>document.getElementById('msg')).value)
})