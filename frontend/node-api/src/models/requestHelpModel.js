const mongoose = require('mongoose');

const requestHelpSchema = new mongoose.Schema({
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String, required: true },
  },
  carDetails: {
    model: { type: String, required: true },
    color: { type: String, required: true },
    year: { type: String, required: true },
  },
  personalDetails: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  issue: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('RequestHelp', requestHelpSchema);