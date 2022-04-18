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
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate, Link } from 'react-router-dom';

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
  
  
//const ProductBlock = React.memo(function MusicCard({product}) {    
const ProductBlock = ({product}) =>{    

    const navigate = useNavigate();
    const toDetail = () =>{
        navigate(`/product-detail/${product._id}`);
    }

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN04TextInfoContentStyles();
    const shadowStyles = useOverShadowStyles({ inactive: true });

    const {_id, title, category, image, price} = product; //, description
    
    return(
    <>
        {/* <p>{product.title}</p> */}
        
            <Card className={cx(styles.root, shadowStyles.root)}>
                <Link to={`/product-detail/${_id}`} style={{ textDecoration: 'none'  }}>
                    <CardMedia
                        className={cx(styles.media, mediaStyles.root)}
                        image={"http://127.0.0.1:8080"+image}
                    />
                </Link>
                <CardContent>
                    <Link to={`/product-detail/${_id}`} style={{ textDecoration: 'none'  }}>  
                        <Typography variant="button" gutterBottom component="div">
                            {title.substr(0, 40)+"..."}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div" color={"#761886"}>
                            ${price}
                        </Typography>
                    </Link>  
                        <Button 
                        variant="contained" 
                        color="secondary"
                        sx={{ mt:2 }}
                        onClick={()=>{toDetail(_id)}}
                        startIcon={<RemoveRedEyeIcon />}
                        ></Button>
{/*                         
                        <Button 
                        variant="contained" 
                        color="info"
                        sx={{ mt:2 }}
                        //onClick={()=>{updateProd(product)}}
                        startIcon={<AddShoppingCartIcon />}
                        > </Button>
                         */}
                        <Button 
                        variant="contained" 
                        color="error"
                        sx={{ mt:2 }}
                        // onClick={()=>{delProd(id)}}
                        startIcon={<FavoriteIcon />}
                        > </Button>
                    
                </CardContent>
            </Card>
        
        
    </>
    
    );
};
export default ProductBlock;