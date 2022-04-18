import React from 'react'
import Features from '../Features/Index'
import Nav from '../Nav/Index'
import Offer from '../Offer/Index'
import Slider from '../Slider/Index'
import Top from '../Top/Index'

function Header() {
  return (
      <>
        <Top />
        <Nav />
        <Slider />
        <Features />
        <Offer/>
      </>
  )
}

export default Header