import React from 'react'
import Card from '@/components/card/card';
import IProduct from '@/types/IProduct';

export const fetchProducts = async ()=>{
    const res = await fetch("http://localhost:3030/products");
    const products = await res.json();
    return products;
}

const Products = async () => {
    const fetchData = await fetchProducts()


  return (
    <div className='grid grid-cols-4 justify-items-center mt-20'>
        {
        fetchData.map((prod: IProduct)=>{
            return(
                <Card key={prod.id} {...prod}/>
            )
        })
      }
      
    </div>
  )
}

export default Products
