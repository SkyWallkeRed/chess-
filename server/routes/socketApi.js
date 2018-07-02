const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
    console.log('i also got here')
    console.log(req.body.text)
    // io.on('room', function(socket){
    //     socket.join(req.body.text);
    //   });
})

module.exports = router;
