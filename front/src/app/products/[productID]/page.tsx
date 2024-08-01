import React from 'react'

const DetailsProduct: React.FC <{params:{productID:string}}>= ({params}) => {
  return (
    <div>
      <h2>aqui van los detalles del Producto con id {params.productID}</h2>
    </div>
  )
}

export default DetailsProduct
