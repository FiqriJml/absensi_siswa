'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiTrash } from 'react-icons/hi';

interface RemoveBtnProps {
  id: string;
}

function RemoveBtn({ id }: RemoveBtnProps) {
    const router = useRouter()
  const removeSiswa = async () => {
    // Lakukan operasi penghapusan di sini menggunakan ID yang diberikan
    const confirmed = confirm("Apakah anda yakin ingin menghapus?")
    if(confirmed){
        await fetch(`http://localhost:4000/api/siswa/${id}`,{
            method: 'DELETE'
        })
        router.refresh()
    }
  };

  return (
    <>
      <button onClick={removeSiswa} className="text-gray-500 hover:text-gray-700">
        <HiTrash size={20} />
      </button>
      
    </>
  );
}

export default RemoveBtn;
