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
app.use('/post', router);



app.listen(PORT,()=>
{
    console.log(`Uygulama ${PORT} portunda dinleniyor.` );
});
