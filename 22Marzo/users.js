var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
var jwt = require('jsonwebtoken');


/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
  res.render("frmLogin", {});
});

//esto solo realiza el proceso de autenticación pero no
//no tiene elementos de seguridad
router.post("/login", (req,res,next)=>{
  // console.log(req.body.email, req.body.passwd);
  usuario.login(req.body.email,req.body.passwd,(e ,d)=>{
    if(d){
      //res.send('login correcto');
      ses = req.session;
      console.log(ses.id);
      ses.userdata = d;
      console.log(ses);

      const payload ={
        datos : d
      };

      const clave = process.env.SECRETO || 'dios1234';
      console.log(clave);

      const token =jwt.sign (payload, clave, {expiresIn : 60 * 5});
      ses.token=token;

      res.redirect('/');

    }else{
      res.json(e);
    }
  });
});


router.get('/logout',(req, res, next)=>{
  req.session.destroy((falla)=>{
    if (falla){
      res.send(501, "Error")
    }else{
      res.redirect('/');
    }

  });
});


module.exports = router;
