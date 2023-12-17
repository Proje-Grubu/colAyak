const express = require('express');
const router = express.Router();
const Urun = require('../db/models/urun');
const AdminIslem = require('../db/models/adminislem');
const { uploadFile, getFileStream } = require('../db/gridfs');

// Yeni bir ürün eklemek için
router.post('/urun-ekle', async (req, res) => {
  try {
    const yeniUrun = await Urun.create(req.body);

    const urunFotoYuklemeSonuc = await uploadFile(req.body.foto, yeniUrun.id, 'foto');
    
    const adminIslem = await AdminIslem.create({
      admin_id: req.body.id,
      islem: 'Ürün eklendi',
      islemyapilan_id : yeniUrun.id,
      onModel: 'Urun',
    
    });

    res.json({ urunFotoYuklemeSonuc, yeniUrun, adminIslem });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir ürünü güncellemek için
router.put('/urun-guncelle/:id', async (req, res) => {
  try {
    
    const guncellenmisUrun = await Urun.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    const urunFotoGuncellemeSonuc = await uploadFile(req.body.foto, req.params.id, 'foto');
   
    const adminIslem = await AdminIslem.create({
      admin_id: req.body.id,
      islem: 'Ürün güncellendi',
      islemyapilan_id:guncellenmisUrun.id,
      onModel: 'Urun',
    });
    
    res.json({ urunFotoGuncellemeSonuc, guncellenmisUrun, adminIslem });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir ürünü silmek için
router.delete('/urun-sil/:id', async (req, res) => {
  try {
    const silinenUrun = await Urun.findByIdAndRemove(req.params.id);

    const urunFotoSilmeSonuc = await deleteFile(req.params.id, 'foto');

    const adminIslem = await AdminIslem.create({
      admin_id: req.body._id,
      islem: 'Ürün silindi',
      islemyapilan_id : silinenUrun._id,
      onModel: 'Urun',
    });

    res.json({ urunFotoSilmeSonuc, silinenUrun, adminIslem });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bir ürün profili için fotoğrafı getirme
router.get('/urun-foto/:urunID', async (req, res) => {
  // Bu rota, /urun-foto/:urunID URL'sine yapılan GET isteklerine yanıt verir ve belirli bir ürünün fotoğrafını getirir.
  try {
    const urunID = req.params.urunID;

    // GridFS'ten dosya akışını al
    const readStream = getFileStream(urunID, 'foto','urun');

    // Dosya akışını istemciye gönder
    readStream.pipe(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
