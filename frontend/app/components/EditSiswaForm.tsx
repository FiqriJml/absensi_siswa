'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Isiswa from "@/types/Siswa";

export default function EditSiswaForm ({id, siswaData}:{id: string, siswaData: Isiswa}){
    const [formData, setFormData] = useState({
      nama: '',
      nis: '',
      kelas: '',
      tanggal_lahir: '',
      no_kontak_darurat: ''
    });
  // Memperbarui formData saat siswaData berubah menggunakan useEffect
  useEffect(() => {
    setFormData(siswaData);
  }, [siswaData]);
    const { nama, nis, kelas, tanggal_lahir, no_kontak_darurat } = formData;

    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const router = useRouter()

    const updateSiswa = async (id: string) => {
        try{
            const res = await fetch('http://localhost:4000/api/siswa/'+id, {
                cache: 'no-cache',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nama, nis, kelas, tanggal_lahir, no_kontak_darurat})
            })
            if(res.ok){
                console.log('Data siswa berhasil dirubah')
                router.push('/siswa')
            }else{
                console.log('gagal menambahkan siswa')
            }
        }
        catch (err){
            console.error('Terjadi Kesalahan', err)
        }
    }

    const  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateSiswa(id)
    }

    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Form Data Siswa</h2>
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
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nis" className="block text-sm font-medium text-gray-600">
              Nomor Induk Siswa (NIS)
            </label>
            <input
              type="text"
              id="nis"
              name="nis"
              value={nis}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kelas" className="block text-sm font-medium text-gray-600">
              Kelas
            </label>
            <input
              type="text"
              id="kelas"
              name="kelas"
              value={kelas}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tanggal_lahir" className="block text-sm font-medium text-gray-600">
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggal_lahir"
              name="tanggal_lahir"
              value={tanggal_lahir}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="no_kontak_darurat" className="block text-sm font-medium text-gray-600">
              Nomor Kontak Darurat
            </label>
            <input
              type="tel"
              id="no_kontak_darurat"
              name="no_kontak_darurat"
              value={no_kontak_darurat}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    );

}