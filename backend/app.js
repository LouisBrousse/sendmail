// app.js
import express from 'express'
import nodemailer from 'nodemailer'
//import path from 'path'; 

const app = express()

app.use(express.urlencoded({ extended: true }))
// app.use(express.static('../client'));

// app.get('/', (req, res) => {
//    res.sendFile('../client/index.html');
// });

app.post('/sendmail', function(req, res){
   
   const to = req.body.destinataire;
   const subject = req.body.sujet;
   const text = req.body.message;
   console.log('to est ===>', to)
   const config = {
      host: process.env.MAIL_HOST,
      secure: false,
      auth: {
         user: process.env.MAIL_USER,
         pass: process.env.MAIL_PASSWORD
      },
      name: "dufullstack.fr",
   }

   const transporter = nodemailer.createTransport(config)
   transporter.sendMail({ from: "buisson@n7.fr", to, subject, text, html: text })
   res.redirect('/')

});

app.listen(3000, function () {
   console.log('Server listening on port 3000')
 })


