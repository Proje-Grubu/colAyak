const express = require('express');
const PORT = 5000;
const app = express();
const bodyparser=require("body-parser");
const nodemailer=require('nodemailer');

app.use(express.static('public'));

// Ana sayfa URl uzantısı
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/anasayfa.html');
});

// Harita sayfası URl uzantısı
app.get('/harita', (req, res) => {
  res.sendFile(__dirname + '/public/html/map.html');
});


// Satıcı sayfası URl uzantısı
app.get('/satici', (req, res) => {
  res.sendFile(__dirname + '/public/html/saticiprofil.html');
});

app.get('/iletisim', (req, res) => {
  res.sendFile(__dirname + '/public/html/anasayfa.html');
});

app.listen(PORT,()=>
{
    console.log("Uygulama 5000 portunda dinleniyor." );
});






//geri bildirim
app.use(bodyparser.urlencoded({extend:true}));

app.post("/",function(req,res){
    const comn=req.body.message;
    const na=req.body.name;

var transpoter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'proje1503@gmail.com',
        pass:'uafe ozbq vcop uhpm'

    }

    });


var mailOptions={
    from:'proje1503@gmail.com',
    to:req.body.email,
    cc:'proje1503@gmail.com',
    subject:'Geribildiriminiz için teşekkürler '+ na,
    text: 'Mesajınız--> '+comn


};

transpoter.sendMail(mailOptions,function(error,info){
if(error){
    console.log(error);
}else{
    res.redirect('/');
    console.log('email sent'+info.response);
}

})

});

