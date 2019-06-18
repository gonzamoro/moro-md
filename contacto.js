'use strict'

const nodemailer = require("nodemailer");
const sesion = require('./sesion.json');

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: sesion.user, // generated ethereal user
      pass: sesion.pass // generated ethereal password
    }
  });
    
        Contacto = () => {}

Contacto.tata = (req, res, next) => {
    let
      nombre= req.body.nombree,
      email= req.body.emaill,
      telefono= req.body.telefonoo,
      mensaje= req.body.mensaje,
      text1 =`
            nombre: ${nombre}
            e-mail: ${email}
            telefono: ${telefono}
            mensaje: ${mensaje}
            `;
}

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'test.md136@gmail.com', // sender address
    to: 'test.md136@gmail.com', // list of receivers
    subject: "Hello ✔", // Subject line
    text: text1, // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
