import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import babyShoes from '../../assets/images/babyShoes.png'
import shoes1 from '../../assets/images/shoes1.png'

const styles = {
    img: {
        width: '60%'
    }
}

function RecentProducts() {
  return (
    <>
        <Grid container my={2}>
              <Grid item xs={ 6 }>
                <Typography variant='h3'> Flash Sell </Typography>
              </Grid>
              <Grid item xs={ 6 }>
              <Typography variant='h3'> Recent Product </Typography>
              </Grid>
        </Grid>
        <Grid container my={2} py={2} style={{backgroundColor:'#f3f3f3'}}>
            <Grid item xs={12} sm={6} md={6} display='flex' justifyContent='space-between' alignItems='center'>
                <Grid item xs={ 6 }>
                        <img src={ shoes1 } alt='shoes'  style={styles.img}/>
                </Grid>
                <Grid item xs={ 6 } >
                        <Typography> Product Name </Typography>
                        <Typography> $120 </Typography>
                        <Typography variant='caption'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quia! </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} display='flex' justifyContent='space-between' alignItems='center'>
               <Grid item xs={4}>
                     <img src={babyShoes} alt='recent products' style={styles.img} />
                     <Typography> Product Title </Typography>
                     <Typography> Price </Typography>
                     <Button variant='contained'> ADD to Cart </Button>
                 </Grid>
                 <Grid item xs={4}>
                     <img src={babyShoes} alt='recent products' style={styles.img} />
                     <Typography> Product Title </Typography>
                     <Typography> Price </Typography>
                     <Button variant='contained'> ADD to Cart </Button>
                 </Grid>
                 <Grid item xs={4}>
                     <img src={babyShoes} alt='recent products' style={styles.img} />
                     <Typography> Product Title </Typography>
                     <Typography> Price </Typography>
                     <Button variant='contained'> ADD to Cart </Button>
               </Grid>           
            </Grid>
        </Grid>
    </> 
  )
}

export default RecentProducts