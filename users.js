var express = require('express');
var router = express.Router();
var usuario = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req,res,next)=>{

});


module.exports = router;
