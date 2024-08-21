import Image from "next/image"
import Link from "next/link"

const Categorias = () => {
  return (
    <div className='flex justify-center ml-16 p-10 rounded-b-xl shadow-ps  absolute top-8 z-0 w-11/12 h-28 bg-gray-700 '>
      <ul className='flex gap-16 text-white'>
        <li><Link className="flex flex-col items-center" href="categorias/0"><Image src="./movil.svg" width={40} height={40} alt='icono cel' /> Smartphones</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/1"><Image src="./laptop.svg" width={40} height={40} alt='icono laptop' />Laptops</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/2"><Image src="./tablet.svg" width={40} height={40} alt='icono tablet' />Tablets</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/3"><Image src="./headphone.svg" width={40} height={40} alt='icono headphone' />Headphones</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/4"><Image src="./videoCamara.svg" width={40} height={40} alt='icono videoCamara' />Cameras</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/5"><Image src="./printer.svg" width={40} height={40} alt='icono printer' />Printers</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/6"><Image src="./desktop.svg" width={40} height={40} alt='icono desktop' />Monitors</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/7"><Image src="./storage.svg" width={40} height={40} alt='icono storage' />Storage</Link></li>
        <li><Link className="flex flex-col items-center" href="categorias/8"><Image src="./accesories.svg" width={40} height={40} alt='icono accesories' />Accessories</Link></li>
      </ul>
    </div>
  )
}

export default Categorias
