// pages/siswa.tsx
import DaftarSiswa from '../components/DaftarSiswa';
import LisSiswa from './LisSiswa';
 
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
   const Siswa = async () => {
    const dataSiswa = await getLisSiswa()
    return (
      <> 
        <DaftarSiswa dataSiswa={dataSiswa} />
      </>
      
    )
  }

  export default Siswa