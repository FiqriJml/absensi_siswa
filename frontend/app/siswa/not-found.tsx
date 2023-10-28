import Link from "next/link"



function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem</h2>
        <p>We could not found the page you were looking for</p>
        <p>Go back to <Link href={'/'}>Home</Link> </p>
        
    </main>
  )
}

export default notFound