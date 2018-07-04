const express = require('express')
const router = express.Router();
const Board = require('./boardModel');
const mongoose = require('mongoose');


router.get('/', function (req, res) {
  Board.find().exec(function (err, data) {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  });
});

router.post('/', (req, res) => {
  let newBoard = new Board({ game_id: req.body.game_id, boardArray: req.body.boardArray });
  newBoard.save(function(err, result){
    if (err){
      console.log(err)
    } else {
      return res.send(newBoard)
    }
  })
})


// router.delete('/', (req, res) => {
//   Board.remove(function (err) {
//     if (err) {
//       console.log(err)
//     } else {
//       return;
//     }
//   });
// })

var requestLoop = setInterval(function(){
  
    Board.remove((err, result) => {
      if (err) {
        console.log(err)
      } else {
        return result
      }
    });

}, 480000);





module.exports = router