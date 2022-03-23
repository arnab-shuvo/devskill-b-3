import { Button } from '@mui/material';
import React, { useState } from 'react';

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
import BuildIcon from '@mui/icons-material/Build';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
  
  
export const ProductBlock = React.memo(function MusicCard({product, showDetail, updateProd, delProd}) {
  
    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN04TextInfoContentStyles();
    const shadowStyles = useOverShadowStyles({ inactive: true });

    const {id, title, category, image, rating, price, description} = product;
    
    return(
    <>
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
                className={cx(styles.media, mediaStyles.root)}
                image={image}
            />
            <CardContent>
                <TextInfoContent
                classes={textCardContentStyles}
                overline={category}
                heading={"$"+ price}

                body={
                    description.substr(0, 20)+"..."
                }
                />
                
                <Button 
                variant="contained" 
                color="secondary"
                sx={{ mt:2 }}
                onClick={()=>{showDetail(id)}}
                startIcon={<RemoveRedEyeIcon />}
                > </Button>
                
                <Button 
                variant="contained" 
                color="info"
                sx={{ mt:2 }}
                onClick={()=>{updateProd(product)}}
                startIcon={<BuildIcon />}
                
                > </Button>
                
                <Button 
                variant="contained" 
                color="error"
                sx={{ mt:2 }}
                onClick={()=>{delProd(id)}}
                startIcon={<CloseIcon />}
                > </Button>

            </CardContent>
        </Card> 
    </>
    
    );
});
export default ProductBlock;