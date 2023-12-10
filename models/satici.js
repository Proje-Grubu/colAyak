const mongoose = require('mongoose');

const saticiSchema = new mongoose.Schema({
  ad: String,
  adres: {
    sehir: String,
    mahalle: String,
    sokak: String,
  },
  urun_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Urun',
  }],
  profilFotoAdi: String,
  afisAdi: String
});

const Satici = mongoose.model('Satici', saticiSchema);

module.exports = Satici;
