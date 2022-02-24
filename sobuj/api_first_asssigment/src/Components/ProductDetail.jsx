import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Button, Grid, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '../../../todo/node_modules/@mui/system/Box';
// import Grid from '@mui/material/Grid';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const ProductDetail = ({selectedProduct, backHome})=>{
    return(
        <>
            
            <Grid container item sx={8} justifyContent="center">
            <h1>Product detail {selectedProduct.title}</h1>
              <Grid item sx={6}>
                <Card>
                  <CardMedia
                    image={selectedProduct.image}
                    style={{ height: 140 }}
                  />
                </Card>
              </Grid>
              <Grid item sx={6}>
                <Typography variant="h3" gutterBottom component="div">
                  {selectedProduct.title}
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div">
                  {selectedProduct.description}
                </Typography>
              </Grid>

             
            </Grid>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={()=>{backHome(null)}}
              >Back to Home</Button>
        </>
    )
}

export default ProductDetail;