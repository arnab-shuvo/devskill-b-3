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
import { Grid, Typography } from '@mui/material';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductDetail from './ProductDetail';
// import Grid from '@mui/material/Grid';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 280,
    width:250,
    margin: 'auto',
    borderRadius: 12,
    padding: 10,
    marginBottom:25,
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





export const Products = React.memo(function MusicCard({productList, showDetail}) {

// const Products = ({productList}) =>{

  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });




const seeDetail=(id)=>{
    alert("Product ID is-"+ id)
}

  return (
        <>

                <Grid container sx={10} justifyContent="center">
                    <Item>
                        <Typography variant="h2" gutterBottom component="div">
                            Product List from API
                        </Typography>
                        
                        <Grid container item>
                            {productList.map((product)=>{
                                return(
                                    // <li>{product.title}</li>
                                    <Card className={cx(styles.root, shadowStyles.root)}>
                                        <CardMedia
                                            className={cx(styles.media, mediaStyles.root)}
                                            image={product.image}
                                        />
                                        <CardContent>
                                            <TextInfoContent
                                            classes={textCardContentStyles}
                                            overline={product.category}
                                            heading={"$"+ product.price}

                                            body={
                                                // 'an amazing product'
                                                product.title
                                            }
                                            />
                                            
                                            <Button 
                                            variant="contained" 
                                            color="secondary"
                                            sx={{ mt:2 }}
                                            onClick={()=>{showDetail(product.id)}}
                                            >View Detail</Button>
                    
                                        </CardContent>
                                    </Card> 
                                );
                            })}
                            
                            
                        </Grid>
                    </Item>
                    
                </Grid>
            
        </>
    
    
    
  );
});
export default Products;