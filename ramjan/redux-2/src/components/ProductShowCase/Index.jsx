import { Button, Card, CardActions, CardMedia, Grid } from '@mui/material'
import React from 'react'

function ProductShowCase({ products}) {

  return (
    <Grid container spacing={2}>
      {
        products.map((product, index) => 
        <Grid item xs={3} key={index} >
        <Card>
        <CardMedia
            component='img'
            height='300px'
            width='100%'
            backgroundSize='cover'
            image={product.image}
        />
              <CardActions>
                <Button small color='primary' variant='contained'> Details </Button>
              </CardActions>
        </Card>
      </Grid>
        )
      }
      </Grid>
  )
}

export default ProductShowCase