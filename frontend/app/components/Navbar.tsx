import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 mb-6">
        <div className="flex space-x-4">
            <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" href={"/"}>PresensiApp</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href={"/siswa"}>Siswa</Link>
        </div>
       
    </nav>
  )
}

export default Navbar