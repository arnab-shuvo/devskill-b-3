import React from 'react'
import AppBar from './ApppBar'
import DateTime from './DateTime'
import Footer from './Footer'
import Lists from './Lists'

const styles = {
  main: {
      backgroundColor: '#174060',
      height: '100vh'
  }
}


function Home() {
  return (
    <div style={styles.main}>
      <AppBar />
      <DateTime />
      <Lists />
      <Footer />
    </div>
  )
}

export default Home