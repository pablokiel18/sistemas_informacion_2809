const login = ( email , passwd , callback )=>{
  var err;
  var bd_data; // sumula la inf. proveniente de bd.
  if ( email == 'joe@doe.com' && passwd == '1234'  ) {
    // consultar en BD info faltante
    bd_data={
      'email':email,
      'depto':'ventas',
      'phone':'5467893415'
    }
  } else {
    err = {'mensaje':"Credenciales incorrectas"}
  }
  callback(err,bd_data);
}   //  const login = function(){}


exports.login = login;
