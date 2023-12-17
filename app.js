const express = require('express');
const PORT = 5000;
const app = express();

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


app.listen(PORT,()=>
{
    console.log("Uygulama 5000 portunda dinleniyor." );
});

