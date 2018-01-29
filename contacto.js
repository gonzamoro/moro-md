'use strict'

var nodemailer = require('nodemailer'),
    util = require('util'),
    querystring = require('querystring'),
    sesion = require('./sesion.json'),


    transporter = nodemailer.createTransport({
      service: sesion.service,
      auth: {
      user: sesion.user,
      pass: sesion.pass
      }
}),
    
    Contacto = () => {}

Contacto.tata = (req, res, next) => {
    let
      nombre= req.body.nombree,
      email= req.body.emaill,
      telefono= req.body.telefonoo,
      mensaje= req.body.mensaje,
      mailOptions = {
      from: 'test.md136@gmail.com',
      to: 'test.md136@gmail.com',
      subject: 'Sending Email using Node.js',
      text:`
            nombre: ${nombre}
            e-mail: ${email}
            telefono: ${telefono}
            mensaje: ${mensaje}
            `
}
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    console.log(req.params);
  }
  res.redirect('/')
});


}

module.exports = Contacto 




