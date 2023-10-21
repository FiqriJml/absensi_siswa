// models/Siswa.js
const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  umur: {
    type: Number,
    required: true,
  },
});

const Siswa = mongoose.model('Siswa', SiswaSchema);

module.exports = Siswa;
