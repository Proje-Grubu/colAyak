const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Bağlantı Hatası'));
db.once('open', () => {
  console.log('MongoDB Bağlantısı Başarılı');
});

module.exports = mongoose;
