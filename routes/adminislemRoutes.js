const express = require('express');
const router = express.Router();
const AdminIslem = require('../models/adminislem');

// Admin işlemlerini getirmek için
router.get('/adminislem-getir', async (req, res) => {
  try {
    const adminIslemler = await AdminIslem.find();
    res.json(adminIslemler);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Yeni bir admin işlemi eklemek için
router.post('/adminislem-ekle', async (req, res) => {
  try {
    const { admin_id, islem, islemyapilan_id } = req.body;

    const yeniAdminIslem = new AdminIslem({
      admin_id,
      islem,
      islemyapilan_id,
    });

    await yeniAdminIslem.save();

    res.status(201).json({ success: true, adminIslem: yeniAdminIslem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir adminin herhangi bir değişiklik yaptığı yerde (/adminislem-ekle endpoint'i kullanılarak), bu değişiklik admin işlemleri koleksiyonuna kaydedilir.

module.exports = router;
