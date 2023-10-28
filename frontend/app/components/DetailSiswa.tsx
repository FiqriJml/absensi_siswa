import Isiswa from '@/types/Siswa';
import React from 'react';

const DetailSiswa = ({ siswa }: {siswa: Isiswa}) => {
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Detail Siswa</h2>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <strong>Nama:</strong> {siswa.nama}
            </div>
            <div>
              <strong>NIS:</strong> {siswa.nis}
            </div>
            <div>
              <strong>Kelas:</strong> {siswa.kelas}
            </div>
            <div>
              <strong>Tanggal Lahir:</strong> {siswa.tanggal_lahir}
            </div>
            <div>
              <strong>Nomor Kontak Darurat:</strong> {siswa.no_kontak_darurat}
            </div>
          </div>
        </div>
      );
};

export default DetailSiswa;
