const express = require('express');
const router = express.Router();


// Ana sayfa URl uzantısı
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/html/anasayfa.html');
});


// Harita sayfası URl uzantısı
router.get('/harita', (req, res) => {
    res.sendFile(__dirname + '/app/html/map.html');
});


// Satıcı sayfası URl uzantısı
router.get('/satici', (req, res) => {
    res.sendFile(__dirname + '/app/html/saticiprofil.html');
});


router.get('/post', (req, res) => {
    res.sendFile(__dirname + '/app/db/routers/geribildirimRouters.js');
});
    


module.exports = router;