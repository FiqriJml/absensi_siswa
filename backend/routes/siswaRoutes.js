// routes/siswaRoutes.js
const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswaController');

// Route GET untuk endpoint '/siswa'
router.get('/', siswaController.getAllSiswa);

// Route GET untuk endpoint '/siswa/:id'
router.get('/:id', siswaController.getSiswaById);

// Route POST untuk endpoint '/siswa'
router.post('/', siswaController.addSiswa); // Menangani penambahan siswa

// Route PUT untuk endpoint '/siswa/:id'
router.put('/:id', siswaController.updateSiswa);

// Route DELETE untuk endpoint '/siswa/:id'
router.delete('/:id', siswaController.deleteSiswa);

module.exports = router;
