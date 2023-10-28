// models/Siswa.js
const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nis: {
    type: String,
    required: true,
  },
  kelas: {
    type: String,
    required: true,
  },
  tanggal_lahir: {
    type: String,
    required: true,
  },
  no_kontak_darurat: {
    type: String,
    required: true,
  }
});
const Siswa = mongoose.model('Siswa', SiswaSchema);

module.exports = Siswa;
