const express = require('express');
const PORT = 5000;
const app = express();
const router = require('./routers');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

//const {UserConnection} = require('./app/db/dbConnect');

app.use(express.static('app'));
app.use(bodyParser.urlencoded({ extended: true }));

//UserConnection();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'proje1503@gmail.com', // E-posta gönderenin e-posta adresi
      pass: 'dtma hlbi xopq abds' // E-posta gönderenin e-posta şifresi
    }
  });


  app.post('/geri-bildirim', async(req, res) => {
    const { name, email, message,  } = req.body;
  
    // E-posta gönderme seçenekleri
    const mailOptions = {
      from: 'proje1503@gmail.com', // Gönderen e-posta adresi
      to: email, // Alıcı e-posta adresi (formdan alınan)
      subject: 'Geri Bildirim',
      text: `Geri bildiriminiz için teşekkür ederiz ${name}! \n Geri bildiriminiz: ${message}`
    };
  
    // E-posta gönderme işlemi
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {

      } else {
        console.log('E-posta gönderildi: ' + info.response);
        res.send('E-posta başarıyla gönderildi!');
      }
    });
  });



app.use('/', router);
app.use('/harita', router);
app.use('/satici', router);
app.use('/colyak-nedir', router);
app.use('/biz-kimiz', router);
app.use('/admin-giris', router);
app.use('/glutensiz-urunler-arama', router);
app.use('/admin-sayfasi',router);
app.use('/harita-elazig',router);
app.use('/gurbuz-market',router);
app.use('/a101-market',router);
app.use('/admin-sayfasi2',router);
app.use('/post', router);




app.listen(PORT,()=>
{
    console.log(`Uygulama ${PORT} portunda dinleniyor.` );
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });