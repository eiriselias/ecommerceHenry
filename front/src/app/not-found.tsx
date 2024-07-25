import Link from "next/link"

const NotFound = () => {
  return (
    <div className='text-center mt-8'>
        <h2 className='text-3xl m-8'>Hay un problema</h2>
        <p>No hemos podido encontrar la pagina que quieres buscar</p>
        <p>Regresa a pagina <Link className="underline text-blue-600" href="/">Principal</Link></p>
    </div>
  )
}

export default NotFound
