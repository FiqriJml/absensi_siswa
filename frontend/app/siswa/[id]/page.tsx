import { notFound } from 'next/navigation';
import Isiswa from '../../../types/Siswa';
import DetailSiswa from '@/app/components/DetailSiswa';

export async function generateStaticParams(params:any) {
    const res = await fetch('http://localhost:4000/api/siswa')
    
    const lisSiswa:Isiswa[] = await res.json()

    return lisSiswa.map((siswa) => {
        id: siswa._id
    })
}

async function getSiswa(id: string) {
    const res = await fetch('http://localhost:4000/api/siswa/' + id, {
        cache: 'no-cache',
        method: "GET",
        next: {
            revalidate: 60 // use 0 to pot out of using cache
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}

interface IParams {
    id: string;
}

export default async function DataSiswa({params}: {params: IParams}){
    const siswa:Isiswa = await getSiswa(params.id) 
    console.log(siswa)
    return (
        <DetailSiswa siswa={siswa}/>
    )
}