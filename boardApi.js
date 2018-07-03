const express = require('express')
const router = express.Router();
const Board = require('./boardModel');
const mongoose = require('mongoose');


router.get('/', function (req, res) {
    Board.find().exec(function(err, data){
      if (err){
        console.log(err)
      } else{
        console.log(data)
        res.send(data);
      } 
    });
  });

  router.post('/', (req, res) => {
    let newBoard = new Board({game_id: req.body.game_id, boardArray: req.body.boardArray});
    newBoard.save();
    })
    

  module.exports = router