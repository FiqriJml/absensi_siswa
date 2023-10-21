// controllers/siswaController.js
const Siswa = require('../models/Siswa');

async function getAllSiswa(req, res) {
  try {
    const siswaList = await Siswa.find();
    res.json(siswaList);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data siswa.' });
  }
}

async function getSiswaById(req, res) {
  const id = req.params.id;
  try {
    const siswa = await Siswa.findById(id);
    if (siswa) {
      res.json(siswa);
    } else {
      res.status(404).json({ error: 'Siswa tidak ditemukan.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data siswa.' });
  }
}

async function updateSiswa(req, res) {
  const id = req.params.id;
  const { nama, umur } = req.body;
  try {
    const siswa = await Siswa.findByIdAndUpdate(id, { nama, umur }, { new: true });
    if (siswa) {
      res.json({ status: 'Sukses', pesan: 'Data siswa berhasil diperbarui.' });
    } else {
      res.status(404).json({ error: 'Siswa tidak ditemukan.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat memperbarui data siswa.' });
  }
}

async function deleteSiswa(req, res) {
  const id = req.params.id;
  try {
    const siswa = await Siswa.findByIdAndDelete(id);
    if (siswa) {
      res.json({ status: 'Sukses', pesan: 'Data siswa berhasil dihapus.' });
    } else {
      res.status(404).json({ error: 'Siswa tidak ditemukan.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat menghapus data siswa.' });
  }
}

async function addSiswa(req, res) {
  const { nama, umur } = req.body;
  try {
    const siswaBaru = new Siswa({ nama, umur });
    await siswaBaru.save();
    res.json({ status: 'Sukses', pesan: 'Siswa berhasil ditambahkan.' });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat menambahkan siswa.' });
  }
}

module.exports = {
  getAllSiswa,
  getSiswaById,
  addSiswa, // Tambahkan fungsi addSiswa di sini
  updateSiswa,
  deleteSiswa,
};