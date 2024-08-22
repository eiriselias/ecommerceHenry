import { getProducts } from '@/helpers/products.helpers'
import React from 'react'
import Link from 'next/link'
import Card from '@/components/card/card'
import IProduct from '@/types/IProduct'

const CategoriasID: React.FC<{params:{id:string}}> = async ({params}) => {
  const products = await getProducts()

  return (
    
      <div className='grid grid-cols-4 justify-items-center mt-32'>
        {  
          products && products?.map((prod: IProduct)=>{
              if(prod.categoryId === Number(params.id)){
                return(
                  <div key={prod.id}>
                    <Link className='bg-blue-400 ml-10 py-4 px-8 rounded-full hover:scale-105'  href="/" >Volver</Link>
                    <Link className='flex justify-center opacity-70 hover:opacity-100 transition-all hover:scale-105 mt-8' href={`/products/${prod.id}`} key={prod.id}>
                      <Card key={prod.id} {...prod}/>
                    </Link>
                  </div>
                )
              }
          })
        }
      </div>
  )
}

export default CategoriasID
