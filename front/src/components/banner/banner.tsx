import { getProducts } from "@/helpers/products.helpers"
import IProduct from "@/types/IProduct"
import Image from "next/image"
import style from "./banner.module.css"
import Link from "next/link"


const Banner = async () => {

  const products = await getProducts()
  const carProduct:IProduct[] = [...products, ...products]

  return (
    <div className=' h-80 flex self-center w-11/12 '>
      <div className={`w-full overflow-hidden `}>
        <div className={`flex whitespace-nowrap h-full ${style.animate}`}>
          {
            carProduct && carProduct?.map((prods:IProduct, index)=>{
              return(
                <Link className="flex flex-col flex-shrink-0 h-full items-center justify-center mx-2 hover:cursor-pointer" href={`/products/${prods.id}`} key={index}>
                  <Image src={prods.image} width={300} height={200} alt={prods.name}/>
                  <span>{prods.name}</span>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Banner
