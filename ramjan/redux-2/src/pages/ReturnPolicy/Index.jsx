import React from 'react';
import Content from '../../components/Contents/Index';
import SmallBanner from '../../components/SmallBanner/Index';
import { returnPolicy } from '../../lib/Data/Return';

function Return() {
  const { title, description, image } = returnPolicy
  return (
    <>
      <SmallBanner />
      <Content title={title} description={description} image={ image }/>
    </>
  )
}

export default Return