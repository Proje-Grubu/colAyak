// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const AdminIslem = require('../models/adminislem');

// Yeni bir admin eklemek için
router.post('/admin-ekle', async (req, res) => {
  try {
    const yeniAdmin = await Admin.create(req.body);
    const adminIslem = await AdminIslem.create({
      admin_id: req.body.id,
      islem: 'Admin eklendi',
      islemyapilan_id:yeniAdmin.id,
      onModel: 'Admin',
    });
    res.json({ yeniAdmin, adminIslem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir admini güncellemek için
router.put('/admin-guncelle/:id', async (req, res) => {
  try {
    const guncellenmisAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    const adminIslem = await AdminIslem.create({
      admin_id: req.body.id,
      islem: 'Admin güncellendi',
      islemyapilan_id:guncellenmisAdmin.id,
      onModel: 'Admin',
    });
    res.json({ guncellenmisAdmin, adminIslem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir admini silmek için
router.delete('/admin-sil/:id', async (req, res) => {
  try {
    const silinenAdmin = await Admin.findByIdAndRemove(req.params.id);
    const adminIslem = await AdminIslem.create({
      admin_id: req.body.id,
      islem: 'Admin silindi',
      islemyapilan_id:silinenAdmin.id,
      onModel: 'Admin',
    });
    res.json({ silinenAdmin, adminIslem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
