const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  actionType: String,
  currency: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('uiActions', logSchema);
