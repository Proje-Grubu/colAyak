const express = require('express');
const router = express.Router();
const Satici = require('../db/models/satici');
const AdminIslem = require('../db/models/adminislem');
const { uploadFile, getFileStream } = require('../gridfs');

// Yeni bir satıcı eklemek için
router.post('/satici-ekle', async (req, res) => {
  try {
    
     const yeniSatici = await Satici.create(req.body);

      // Profil fotoğrafını GridFS'e yükle
      const profilFotoYukleme = await uploadFile(req.body.foto, yeniSatici.id, 'profilFoto');
   
      // Afişi GridFS'e yükle
      const afisYukleme = await uploadFile(req.body.foto, yeniSatici.id, 'afis');

      const adminIslem = await AdminIslem.create({
        admin_id: req.body.id,
        islem: 'Satıcı eklendi',
        onModel: 'Satici',
        islemyapilan_id: yeniSatici.id,
      });

      res.json({ profilFotoYukleme, afisYukleme, yeniSatici, adminIslem });


  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

// Bir satıcıyı güncellemek için
router.put('/satici-guncelle/:id', async (req, res) => {
  try {
    
    const guncellenmisSatici = await Satici.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // Profil fotoğrafını GridFS'e yükle
    const profilFotoGuncelleme = await uploadFile(req.body.foto, guncellenmisSatici.id, 'profilFoto');
   
    // Afişi GridFS'e yükle
    const afisGuncelleme = await uploadFile(req.body.foto, guncellenmisSatici.id, 'afis');
    
    const adminIslem = await AdminIslem.create({
      admin_id: req.body.id,
      islem: 'Satıcı güncellendi',
      islemyapilan_id: guncellenmisSatici.id,
      onModel: 'Satici',
    });

   res.json({ profilFotoGuncelleme, afisGuncelleme, guncellenmisSatici, adminIslem });
      
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir satıcıyı silmek için
router.delete('/satici-sil/:id', async (req, res) => {
  try {
    const silinenSatici = await Satici.findByIdAndRemove(req.params.id);

    const profilFotoSilme = await deleteFile(req.params.id, 'profilFoto');

    const afisSilme = await deleteFile(req.params.id, 'afis');

    const adminIslem = await AdminIslem.create({
      admin_id: req.body.id,
      islem: 'Satıcı silindi',
      onModel: 'Satici',
      islemyapilan_id: req.params.id,
    });
    res.json({ profilFotoSilme, afisSilme, silinenSatici, adminIslem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir satıcı profili için profil fotoğrafını getirme
router.get('/profil-foto/:saticiID', async (req, res) => {
  try {
    const saticiID = req.params.saticiID;
    const readStream = getFileStream(saticiID, 'profilFoto','satici');
    readStream.pipe(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir satıcı için afiş getirme
router.get('/afiso/:saticiID', async (req, res) => {
  try {
    const saticiID = req.params.saticiID;
    const readStream = getFileStream(saticiID, 'afis','satici');
    readStream.pipe(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
