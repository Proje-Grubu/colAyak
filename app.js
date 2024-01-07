const express = require('express');
const PORT = 5000;
const app = express();
const router = require('./routers');
const {UserConnection} = require('./app/db/dbConnect');
app.use(express.static('app'));


UserConnection();

app.use('/', router);
app.use('/harita', router);
app.use('/satici', router);
app.use('/colyak-nedir', router);
app.use('/biz-kimiz', router);
app.use('/admin-giris', router);
app.use('/glutensiz-urunler-arama', router);
app.use('/admin-urun-ekle',router);
app.use('/harita-elazig',router);
app.use('/gurbuz-market',router);
app.use('/a101-market',router);
app.use('/admin-a101-market',router);
app.use('/post', router);




app.listen(PORT,()=>
{
    console.log(`Uygulama ${PORT} portunda dinleniyor.` );
});