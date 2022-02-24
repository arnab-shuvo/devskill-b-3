import React, { useState } from 'react'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'

export default function Product() {

    const[details, setDetails] = useState(true); 
    const[selectedProduct, setSelectedProduct] = useState(); 

    const detailsHandler = (id) => {
         setDetails(false);
         setSelectedProduct(id);
    }

  return (
    <div>
        {details === true ? <ProductList detailsHandler={detailsHandler}/> : <ProductDetails productId={selectedProduct}/>}
        
    </div>
  )
}
