const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
    console.log('i also got here')
    console.log(req.body)
    // io.on('connection', function(socket){
    //     socket.join(req.body);
    //   });
})

module.exports = router;
