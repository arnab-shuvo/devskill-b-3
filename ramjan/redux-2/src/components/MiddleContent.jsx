import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const styles = {
    marginHorizontal: {
        marginTop: '20px',
        marginBottom: '20px'
    }
}

function MiddleContent({title, description}) {
  return (
    <Grid container style={styles.marginHorizontal}>
          <Grid item xs={12} >
              <Card>
                  <CardContent>
                  <Typography variant='h4' align='center'> {title} </Typography>
                <Typography variant='body2' align='center'>
                  {description }
                </Typography>
                  </CardContent>
              </Card>
               
          </Grid>
    </Grid>
  )
}

export default MiddleContent