'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSiswaForm (){
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState(0);

    const router = useRouter()

    const createSiswa = async () => {
        try{
            const res = await fetch('http://localhost:4000/api/siswa', {
                cache: 'no-cache',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nama, umur})
            })
            if(res.ok){
                console.log('Siswa berhasil ditambahkan')
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
        createSiswa()
    }

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