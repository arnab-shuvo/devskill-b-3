import React from 'react'
import Layout from '../../components/Layout/Index'
import RecentProducts from '../../components/RecentProducts/Index'
import TopCategories from '../../components/TopCategory/Index'

function Home() {
  return (
    <>
      <Layout>
        <TopCategories />
        <RecentProducts />
      </Layout>
    </>
   
  )
}

export default Home