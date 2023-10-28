'use client'

import React, { useState } from 'react';
import Isiswa from '@/types/Siswa';

async function getSiswa(id: number) {
    const res = await fetch('http://localhost:4000/api/siswa/' + id, {
        cache: 'no-cache',
        method: "GET",
    })
    return res.json()
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data siswa, misalnya kirim ke API atau simpan di database
    console.log('Data Siswa:');
  };

  interface IParams {
    id: number;
}
async function SiswaUpdate({params}: {params: IParams}) {
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState(0);

    const siswa: Isiswa = await getSiswa(params.id)
    setNama(siswa.nama)
    setUmur(siswa.umur)
    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Form Pengisian Siswa</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nama" className="block text-sm font-medium text-gray-600">
                Nama Siswa
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="umur" className="block text-sm font-medium text-gray-600">
                Umur Siswa
              </label>
              <input
                type="number"
                id="umur"
                name="umur"
                value={umur}
                onChange={(e) => setUmur(parseInt(e.target.value))}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Simpan
            </button>
          </form>
        </div>
      );      
}

export default SiswaUpdate