import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { SliderData } from '../../lib/SliderData';
// import Sidebar from '../Sidebar/Index';



const styles = {
    boxBG: {
        backgroundColor: 'red',
        color: '#fff',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    img: {
        width: '20px'
    },
    verivalButton: {
        textTransform: 'capitalize',
        color: '#000000',
        fontSize : '11px'
    },
    verMenue: {
        height: '25px',
        display: 'flex',
        alignItems: 'center',
       
    },
    imageSlider: {
        width: '100%',
        backgroundResize: 'cover'
    }
}

function Slider() {
    return (
      <>
        <Grid container justifyContent='space-between' spacing={1}>
             {/* <Sidebar /> */}
              <Grid item xs={12} sm={12} md={12}>
                <Carousel
                    showArrows
                    infiniteLoop
                    autoPlay
                    emulateTouch
                >        
                {
                    SliderData.map((Slider, index) =>
                        <Grid item justifyContent='center' key={index}>
                            <img src={Slider.image} />
                            <Typography variant='caption' className="legend"> {Slider.altTag } </Typography>
                        </Grid>
                    )
                } 
                </Carousel>
              </Grid>
          </Grid>        
      </>
  )
}

export default Slider