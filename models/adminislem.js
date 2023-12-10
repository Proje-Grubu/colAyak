const mongoose = require('mongoose');

const adminislemSchema = new mongoose.Schema({
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  },
  islem: String,
  islemyapilan_id: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'onModel',
  },
  onModel: String,
});

const AdminIslem = mongoose.model('AdminIslem', adminislemSchema);

module.exports = AdminIslem;
