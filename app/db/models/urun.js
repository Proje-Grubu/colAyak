const mongoose = require('mongoose');

const urunSchema = new mongoose.Schema({
  tur: String,
  marka: String,
  fiyat: Number,
  fotoAdi: String
});

const Urun = mongoose.model('Urun', urunSchema);

module.exports = Urun;
