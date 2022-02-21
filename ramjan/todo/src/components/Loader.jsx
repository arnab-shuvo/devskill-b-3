import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const styles = {
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#174060',
        height: '100vh'
    }
}

function Loader() {
    return (
    <>
        <Box style={styles.center}>
            <CircularProgress />
        </Box>
    </>
   
  )
}

export default Loader