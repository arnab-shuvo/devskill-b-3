import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const styles = {
    loaderCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        heigh: '100vh'
    }
}

function Loader() {
  return (
      <>
        <Box style={styles.loaderCenter}>
              <CircularProgress/>
        </Box>
      </>
  )
}

export default Loader