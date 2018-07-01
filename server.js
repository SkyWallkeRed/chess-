const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist/chess')));

const socketApi = require('./server/routes/socketApi')
app.use('/socketApi', socketApi)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/chess/index.html'));
});

const server = http.createServer(app);

const io = socketIO(server);

// var nsp = io.of('/play2');
// nsp.on('connection', function(socket){
//     console.log('play2 connected');
//   });

//   var nsp2 = io.of('/play');
// nsp2.on('connection', function(socket){
//     console.log('play connected');
//   });

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User has disconnected');
    });

    socket.on('message', (board) => {
        socket.broadcast.emit('message', board)
        console.log('clients:')
        console.log(JSON.stringify(io.clients) )
    });
});

server.listen(port, ()=>{
    console.log('server running on ' + port);
});