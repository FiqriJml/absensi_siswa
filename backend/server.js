const express = require('express');
const mongoose = require('mongoose');
const app = express();
const siswaRoutes = require('./routes/siswaRoutes');

app.use(express.json());

// Menghubungkan ke MongoDB
mongoose.connect('mongodb+srv://fiqri:absensi_smkn1bayan@cluster0.alepdk7.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Berhasil terhubung ke MongoDB');
  })
  .catch((err) => {
    console.error('Kesalahan koneksi MongoDB:', err.message);
  });

// Gunakan berkas rute untuk endpoint '/siswa'
app.use('/api/siswa', siswaRoutes);

// Middleware untuk menangani permintaan yang tidak cocok dengan rute lainnya
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint tidak ditemukan.' });
});

// Middleware untuk menangani kesalahan server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Terjadi kesalahan server.' });
});

// Jalankan server pada port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
