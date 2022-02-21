import React from 'react';
import '../components/css/Style.css';

const styles = {
    height: {
        height: '50px',
        color: '#fff'

    }
}

function Footer() {
  return (
      <div className='center background' style={styles.height}>
          @Copyright 2022
      </div>
  )
}

export default Footer