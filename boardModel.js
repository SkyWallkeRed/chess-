var mongoose = require('mongoose');

let boardSchema = new mongoose.Schema({
            game_id: Number,
            user1_id: Number,
            user2_id: Number,
            boardArray: Array
        });

let Board = mongoose.model('board', boardSchema)
module.exports = Board;

