const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  ad: String,
  soyad: String,
  telefon: String,
  kullaniciadi: String,
  sifre: String,
  adres: {
    sehir: String,
    mahalle: String,
    sokak: String,
    apartman: String,
    kat: String,
    kapıNo: String,
    postaNo: String,
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
