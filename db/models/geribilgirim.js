const mongoose = require('mongoose');

const geribildirimSchema = new mongoose.Schema({
  ad: String,
  email: String,
  mesaj: String,
  tarih: Date, 
  default: Date.now
});

const Geribildirim = mongoose.model('Geribildirim', geribildirimSchema);

module.exports = Geribildirim;
