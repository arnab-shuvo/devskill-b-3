import React, { useEffect, useState } from 'react'
import Content from '../../components/Contents/Index'
import ProductShowCase from '../../components/ProductShowCase/Index'
import SmallBanner from '../../components/SmallBanner/Index'
import { AboutData } from '../../lib/Data/Data'

const { title, description, image } = AboutData;

function About() {
  const [products, setProducts] = useState([]) 
  const [featuredProducts, setfeaturedProducts] = useState([]) 
  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products?limit=4&sort=desc', {
      mode: 'no-cors',
      header : 'Access-Control-Allow-Origin", "*"'
    })
    .then( (res)=> res.json() )
    .then((data) => setProducts(data))
    
  }, [])

  //   useEffect(() => {
  //   // setFeaturedProductProgress(true)
    
  //   fetch('https://fakestoreapi.com/products?limit=4&sort=asc')
  //   .then( (res)=> res.json() )
  //   .then((data) => setfeaturedProducts(data))
    
  //     // setFeaturedProductProgress(false)
  // }, [])

  return (
    <>
      <SmallBanner />
      <ProductShowCase products={products} />
      <Content title={title} description={description} image={image} />
      <ProductShowCase products={featuredProducts} />
    </>
   
     
   
  )
}

export default About