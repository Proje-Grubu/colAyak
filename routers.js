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

router.get('/colyak-nedir', (req, res) => {
    res.sendFile(__dirname + '/app/html/colayaknedir.html');
});

router.get('/biz-kimiz', (req, res) => {
    res.sendFile(__dirname + '/app/html/bizkimiz.html');
});

router.get('/admin-giris', (req, res) => {
    res.sendFile(__dirname + '/app/html/adminpanel.html');
});

router.get('/glutensiz-urunler-arama', (req, res) => {
    res.sendFile(__dirname + '/app/html/glutensizurunler.html');
});

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/html/anasayfa.html');
});



    


module.exports = router;