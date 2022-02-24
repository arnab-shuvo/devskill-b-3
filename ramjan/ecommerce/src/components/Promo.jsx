import { Button, CardContent, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import banner from '../images/banner.png';
import image1 from '../images/f2.png';

const styles = {
    promoLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
    },
    buttonColor: {
        color: '#fff',
        backgroundColor: '#000000'
    },
    promoDiv: {
        border: '1px solid #cccccc',
        boxShadow: '1px 1px 2px #888888',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    promoCenter: {
        backgroundColor: '#000000',
        width: '100%',
        height: '50%',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    promoCenterBottom: {
        backgroundColor: '#cccccc',
        width: '100%',
        height: '50%',
        color: '#fff',
        textAlign: 'center'
    },
    marginHorizontal : {
        marginTop: '10px',
        marginBottom: '50px',
    }
}

function Promo() {
  return (
      <Grid container spacing={2} style={styles.marginHorizontal}>
          <Grid item xs={12} sm={ 4 } md={4}>
              <Card>
                  <CardContent>
                      <Grid container spacing={0}>
                          <Grid item sm={6}>
                              <Grid
                                  container
                                  direction="column"
                                  justifyContent="center"
                                  alignItems="center"
                              >
                                  <Grid item xs={12}>
                                    <Typography variant='subtitle'>
                                        Price $250
                                    </Typography>
                                  </Grid>
                                  00
                                  <Grid item xs={12}>
                                    <Button variant='contained' style={styles.buttonColor}>
                                        Shop Now
                                    </Button>
                                  </Grid>
                              </Grid>
                          </Grid>
                          <Grid item sm={6}>
                          <img
                            src={image1}
                                  alt='logo'
                                  style={styles.img}
                            /> 
                          </Grid>
                          
                      </Grid>
                </CardContent>
              </Card>
          </Grid> 
          <Grid item xs={12} sm={ 4 } md={4}>
              <div style={styles.promoDiv}>
                  <div style={styles.promoCenter}>
                      <Typography variant='body1'> Promo Code : 045 </Typography>
                      <Typography variant='body2'> Collect your code </Typography>
                  </div>
                  <div style={styles.promoCenterBottom}>
                      <img
                          src={banner}
                          style={styles.img}
                          alt='banner'
                      />
                  </div>
              </div>
          </Grid> 
          <Grid item xs={12} sm={ 4 } md={4}>
              <Card>
                  <CardContent>
                      <Grid container spacing={0}>
                      <Grid item sm={6}>
                          <img
                            src={image1}
                                  alt='logo'
                                  style={styles.img}
                            /> 
                          </Grid>
                          <Grid item sm={6}>
                              <Grid
                                  container
                                  direction="column"
                                  justifyContent="center"
                                  alignItems="center"
                              >
                                  <Grid item xs={12}>
                                    <Typography variant='subtitle'>
                                        Price $250
                                    </Typography>
                                  </Grid>
                                  00
                                  <Grid item xs={12}>
                                    <Button variant='contained' style={styles.buttonColor}>
                                        Shop Now
                                    </Button>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                </CardContent>
              </Card>
          </Grid>
    </Grid>
  )
}

export default Promo