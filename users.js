var express = require('express');
var router = express.Router();
var usuario = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//esto solo realiza el proceso de autenticacion (para el ejenmplo)
//pero no tiene elementos de  seguridad
router.post('/login',(req,res,next)=>{
//console.log(req.body.email, req.doby.passwd);
  usuario.login(req.body.email, req.doby.passwd,(e , d)=>{
    //req.body.passwd SHA256
    if(d){
      respond.send("Login correcto");
      ses=req.session;
      console.log(ses.id)
// crear sesion
/*
1.- reutilizar las sesion origianl del chrome
2.- hacer una nuevadesechando la de web browser
*/


    }else{
      res.json(e);
    }
  });
});


module.exports = router;
