import Isiswa from '../../types/Siswa';
import Link from 'next/link';
const getLisSiswa = async () => {
  try {
    const res = await fetch('http://localhost:4000/api/siswa', {
      cache: 'no-cache'
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error('Error fetching data: ' + error.message);
  }
};

 async function LisSiswa() {
  const lisSiswa = await getLisSiswa()
  return (
    <div>
          <div>
              <h5 className="text-xl font-bold dark:text-white">
                Lis Siswa</h5>
                <Link href={'addSiswa'}>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-bold py-2 px-4 rounded">
                    Tambah Siswa
                  </button>
                </Link>
          </div>
          <div>
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Nama</th>
                  <th scope="col" className="px-6 py-3">Umur</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {lisSiswa.length > 0 ? (
                  lisSiswa.map((siswa: Isiswa, index: number) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={siswa._id}>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{siswa.nama}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{siswa.umur}</td>
                        <td>
                            <Link href={`/siswa/${siswa._id}`}>lihat </Link>
                            <Link href={`/siswa_update/${siswa._id}`}>update </Link>
                            <Link href={`/siswa/delete/${siswa._id}`}>delete </Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center font-medium text-gray-900 dark:text-white">Tidak ada siswa.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
      </div>

  )
}

export default LisSiswa