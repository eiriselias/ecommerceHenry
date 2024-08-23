import React from 'react'
import Card from '@/components/card/card';
import IProduct from '@/types/IProduct';
import { getProducts } from '@/helpers/products.helpers';
import Link from 'next/link';

const Products = async () => {
  const products = await getProducts()


  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-28'>
        {
          products && products?.map((prod: IProduct)=>{
            return(
                <Link className='flex justify-center opacity-70 hover:opacity-100 transition-all hover:scale-105' href={`/products/${prod.id}`} key={prod.id}>
                  <Card key={prod.id} {...prod}/>
                </Link>
            )
        })
      }
      
    </div>
  )
}

export default Products