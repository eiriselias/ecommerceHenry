import { getProducts } from '@/helpers/products.helpers'
import React from 'react'
import Link from 'next/link'
import Card from '@/components/card/card'
import IProduct from '@/types/IProduct'

const CategoriasID: React.FC<{params:{id:string}}> = async ({params}) => {
  const products = await getProducts()
  let find:IProduct[] = []
  find = products.filter((prod:IProduct)=>prod.categoryId === Number(params.id))

  return (
    
      <div>
        {  
          find.length > 0 ? ( find?.map((prod: IProduct)=>{
                return(
                  <>
                    <div className='mt-32'>
                      <Link className='bg-blue-400 ml-10 py-4 px-8 rounded-full'  href="/" >Volver</Link>
                    </div>
                    <div className='grid grid-cols-4 justify-items-center' key={prod.id}>
                      <Link className='flex justify-center opacity-70 hover:opacity-100 transition-all hover:scale-105 mt-8' href={`/products/${prod.id}`} key={prod.id}>
                        <Card key={prod.id} {...prod}/>
                      </Link>
                    </div>
                  </>
                )
          })):(
            <div className='flex mt-32 justify-center items-center'>
              <Link className='bg-blue-400 ml-10 py-4 px-8 rounded-full mr-16'  href="/" >Volver</Link>
              <h2 >No se encontro articulos con la categoria seleccionada</h2>
            </div>
          )
        }
      </div>
  )
}

export default CategoriasID
