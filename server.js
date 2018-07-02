const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://leeherzog:mlabmlab1!@ds221631.mlab.com:21631/chess', function() {console.log("DB connection established!!!")});
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/chess')));




//API route
const socketApi = require('./server/routes/socketApi');
app.use('/socketApi', socketApi);

const boardApi = require('./boardApi');

app.use('/api', boardApi);


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

    //possibily does nothing
    socket.on('message', (board) => {
        socket.broadcast.emit('message', board)
        console.log('clients:')
        console.log(JSON.stringify(io.clients) )
    });

    socket.on('room', (room) => {
        let gameId = JSON.parse(room)
        socket.join(gameId.text);        
        // socket.broadcast.emit('room', room)
        io.to(gameId.text).emit('room', room)
        console.log('New room created')
    });
});
// io.on('room', (socket) => {
//     console.log('New room created');



// });

server.listen(port, ()=>{
    console.log('server RUNNING on ' + port);
});