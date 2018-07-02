const express = require('express')
const router = express.Router();
const Board = require('./boardModel');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    Board.find().exec().then((data) => {
       res.send(JSON.stringify(data));
    }, (err) => {
      console.error(err)
    });
  })

  router.post('/', (req, res) => {
      // console.log(req.body)
    let boardArray = req.body.boardArray
    let newBoard = new Board({game_Id: 1, user1_id: 1, user2_id: 2, boardArray: req.body});
    newBoard.save();
    Board.find().exec().then(data => {
        res.send(JSON.stringify(data))
      }), (err) => {
        console.error(err);
        throw err;
        }
    })
    

  module.exports = router