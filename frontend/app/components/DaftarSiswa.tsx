'use client'

import Isiswa from '@/types/Siswa';
import React from 'react';
import { HiPencilAlt, HiOutlineEye } from 'react-icons/hi';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';

const DaftarSiswa = ({ dataSiswa, onLihat, onEdit, onDelete }: any) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Daftar Siswa</h2>
      <div className='flex gap-1 mb-1'>
        <Link href={'addSiswa'}>
          <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-bold py-2 px-4 rounded">
            Tambah Siswa
          </button>
        </Link>
        <Link href={'uploadSiswa'}>
          <button className="bg-blue-800 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">
            Upload Siswa
          </button>
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">NIS</th>
            <th className="py-2 px-4 border-b">Kelas</th>
            <th className="py-2 px-4 border-b">Tanggal Lahir</th>
            <th className="py-2 px-4 border-b">Nomor Kontak Darurat</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((siswa: Isiswa) => (
            <tr key={siswa._id}>
              <td className="py-2 px-4 border-b">{siswa.nama}</td>
              <td className="py-2 px-4 border-b">{siswa.nis}</td>
              <td className="py-2 px-4 border-b">{siswa.kelas}</td>
              <td className="py-2 px-4 border-b">{siswa.tanggal_lahir}</td>
              <td className="py-2 px-4 border-b">{siswa.no_kontak_darurat}</td>
              <td className="py-2 px-4 border-b">
                <div className='flex gap-2'>
                    <Link href={'siswa/'+siswa._id} className="text-gray-500 hover:text-gray-700">
                        <HiOutlineEye size={20} />
                    </Link>
                    <Link href={'editSiswa/'+siswa._id} className="text-gray-500 hover:text-gray-700">
                        <HiPencilAlt size={20}/>
                    </Link>
                    <RemoveBtn id={siswa._id}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarSiswa;
