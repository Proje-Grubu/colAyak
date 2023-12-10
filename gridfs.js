const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const crypto = require('crypto');

Grid.mongo = mongoose.mongo;

const conn = mongoose.connection;

const gfs = Grid(conn.db);

// Dosyayı MongoDB'ye yükle
const uploadFile = (fileBuffer, callback) => {
  const writeStream = gfs.createWriteStream({
    filename: generateFileName(),
  });

  writeStream.write(fileBuffer);

  writeStream.on('close', (file) => {
    callback(null, file);
  });

  writeStream.end();
};

// Dosyayı MongoDB'den indir
const getFileStream = (filename) => {
  return gfs.createReadStream({ filename });
};

// Dosya adını benzersiz bir şekilde oluştur
const generateFileName = () => {
  return crypto.randomBytes(16).toString('hex');
};

module.exports = {
  uploadFile,
  getFileStream,
};
