const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// var Board = require('./boardDbModel');

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://leeherzog:mlabmlab1!@ds221631.mlab.com:21631/chess', function() {console.log("DB connection established!!!")});
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/chess')));

//API route
const boardApi = require('./boardApi');

app.use('/api', boardApi);

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/chess/index.html'));
});

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User has disconnected');
    });

    socket.on('message', (board) => {
        socket.broadcast.emit('message', board)
    });
});

server.listen(port, ()=>{
    console.log('server running on ' + port);
});