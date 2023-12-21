const express = require('express');
const Geribildirim = require('../models/geribildirim'); // Model dosyanızın yolu
const nodemailer = require('nodemailer');
const router = express();

router.use(express.json());

document.getElementById('gonder').addEventListener('click', function() {

  // POST isteği için bir endpoint
  router.post('/yenigeribildirim', async (req, res) => {
    try {
      const name=req.body.name;

      const { ad, email, mesaj } = req.body;

      // Geribildirim koleksiyonuna kaydet
      const yeniGeribildirim = new Geribildirim({
        ad,
        email,
        mesaj
      });

      await yeniGeribildirim.save();

      // Kullanıcıya e-posta gönder
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'proje1503@gmail.com', // E-posta gönderenin e-posta adresi
          pass: 'dtma hlbi xopq abds' // E-posta gönderenin e-posta şifresi
        }
      });

      const mailOptions = {
        from: 'proje1503@gmail.com',
        to: req.body.email,
        cc:'proje1503@gmail.com',
        subject: 'Geribildiriminiz için teşekkürler '+ name,
        text: 'Teşekkür ederiz! Geri bildiriminiz alınmıştır.'
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('E-posta gönderildi: ' + info.response);
        }
      });

      res.status(200).send('Geri bildiriminiz alınmıştır.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Bir hata oluştu.');
    }
  });
});
