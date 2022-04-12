import React from 'react'
import banner from '../../assets/images/buymore.png'

const styles = {
    img: {
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
    }
}

function Banner() {
  return (
      <>
           <img
                src={banner}
                alt='logo'
                style={styles.img}
            /> 
      </>
  )
}

export default Banner