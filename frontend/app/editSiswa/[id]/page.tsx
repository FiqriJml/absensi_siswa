
import EditSiswaForm from "@/app/components/EditSiswaForm";
import Isiswa from "@/types/Siswa";
import { notFound, useRouter } from "next/navigation";

interface IParams {
    id: string;
}

async function getSiswa(id: string) {
    const res = await fetch('http://localhost:4000/api/siswa/' + id, {
        cache: 'no-cache',
        method: "GET",
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}
async function editSiswa({params}: {params: IParams}){
    const {id} = params
    console.log(id)
  const siswaData:Isiswa = await getSiswa(id) 
  console.log(siswaData)
  return (
    <>

        <EditSiswaForm id={id} siswaData={siswaData}/>
    </>
  )
}

export default editSiswa