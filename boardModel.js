var mongoose = require('mongoose');

let boardSchema = new mongoose.Schema({
            game_id: String,
            boardArray: Array
        });

let Board = mongoose.model('board', boardSchema)
module.exports = Board;
