import React from 'react';
import Content from '../../components/Contents/Index';
import SmallBanner from '../../components/SmallBanner/Index';
import { PrivecyPlicyData } from '../../lib/Data/PrivecyPolicy';


function Privecy() {
  const { title, description, image } = PrivecyPlicyData
  return (
    <>
      <SmallBanner />
      <Content title={title} description={description} image={ image }/>
    </>
  )
}

export default Privecy