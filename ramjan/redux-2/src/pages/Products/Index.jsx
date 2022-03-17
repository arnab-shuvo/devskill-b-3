import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MiddleContent from '../../components/MiddleContent';
import ProductList from '../../components/ProductList/Index';
import SmallBanner from '../../components/SmallBanner/Index';
import { Description, Title } from '../../lib/Data/Data';
import { setProductList } from '../../store/action/productAction/Index';


function Products() {
  const [order, setOrder] = useState('desc')
  const [category, setcategory] = useState('')
  const { products } = useSelector((store) => store.products)
  const productList = products
  const disptch = useDispatch()
  
  console.log(productList);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then( (json) => {
        disptch(setProductList(json))
      });
},[])
  
  return (
    <>
    <SmallBanner />
    <MiddleContent title={Title} description={Description} />
    <ProductList products={productList} />
  
  </>
  )
}

export default Products