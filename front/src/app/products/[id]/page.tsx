import ProductDetails from '@/components/productDetails/ProductDetails'
import { getProductById } from '@/helpers/products.helpers'
import React from 'react'

const DetailsProduct: React.FC<{params:{id:string}}> = async ({params}) => {

  const product = await getProductById(params.id)

  return (
       <ProductDetails {...product} />
  )
}

export default DetailsProduct
