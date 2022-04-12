import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Index'
import MiddleContent from '../../components/MiddleContent'
import ProductShowCase from '../../components/ProductShowCase/Index'
import SmallBanner from '../../components/SmallBanner/Index'
import { Description, Features, Title } from '../../lib/Data/Data'

function Home() {
  const [products, setProducts] = useState([]) 
  const [featuredProducts, setfeaturedProducts] = useState([]) 
  const [productProgress, setProductProgress] = useState(true)
  const [featuredProductProgress, setFeaturedProductProgress] = useState(true)
  
 
  useEffect(() => {
    setProductProgress(true)
    fetch('https://fakestoreapi.com/products?limit=4&sort=desc')
    .then( (res)=> res.json() )
    .then((data) => setProducts(data))
    
    setProductProgress(false)
  }, [])

    useEffect(() => {
    setFeaturedProductProgress(true)
    
    fetch('https://fakestoreapi.com/products?limit=4&sort=asc')
    .then( (res)=> res.json() )
    .then((data) => setfeaturedProducts(data))
    
      setFeaturedProductProgress(false)
  }, [])
  
  return (
    <>
        <SmallBanner />
        <MiddleContent title={ Title } description={Description} />
        {
          productProgress? <Loader/> : <ProductShowCase products={ products } /> 
        }
        <MiddleContent title={Features} description={Description} />
        {
          featuredProductProgress? <Loader/> : <ProductShowCase products={ featuredProducts } />
        }
      </>
  )
}

export default Home