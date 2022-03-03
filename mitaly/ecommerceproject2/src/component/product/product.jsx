import Grid from '@mui/material/Grid';
import React,{useState} from 'react';
import './product.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cv1 from './../../assets/images/1.png';
import cv2 from './../../assets/images/2.png';
import cv3 from './../../assets/images/3.png';
import cv4 from './../../assets/images/4.png';


const Product=()=>{
    const [buttonStatus,setbuttonStatus]=useState('All');
    const [products,setProducts]=useState([
        {
            id:1,
            img:cv1,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv2,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv3,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv4,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv1,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv2,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv3,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv4,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv1,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv2,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv3,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv4,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv1,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv2,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv3,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        },
        {
            id:1,
            img:cv4,
            title: 'ArtCrypto',
            description:'0.25 ETH',
            duration: '3h 50m 2s left',
            status: 'Place a bid',
            categories: 'Crypto'
        }

]);
        
    return(
        <>
        <Grid container justifyContent={'center'} spacing={2} >
        <Grid item container md={12} >
        <Grid item xs={12}>
        <div className='p_1'>
            <h2>DISCOVER MORE NFTS</h2>
            <button className="active" >All Categoris</button>
            <button >Art</button>
            <button >Celebrities</button>
            <button >Gaming</button>
            <button >Sport</button>
            <button >Music</button>
            <button >Crypto</button>
            <button >All Filters</button>
        </div>
        </Grid>
        </Grid>
        
        <div className='p_2'>
        
        <Grid item container md={12} >
        <Grid></Grid>
            {products.map((product)=>{
                    return (
                        <Grid item container md={3} >
                        <Grid item xs={12}>
                        
                          
                        <Card sx={{ maxWidth: 345 }}>
                              <CardHeader
                                avatar={
                                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title={product.title.substr(0,10)}
                                subheader={product.category}
                              />
                              <CardMedia
                                component="img"
                                height="194"
                                image={product.img}
                                alt="Paella dish"
                              />
                              <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                  {product.description.substr(0,40)}
                                </Typography>
                              </CardContent>
                             
                              
                            </Card>
                            </Grid>
                            </Grid>
                            )
            })}
        </Grid>
        
        </div>
        
        <Grid item container md={12}>
        <Grid item xs={12}><button>More NFTs</button></Grid>
        </Grid>
        </Grid>
        </>
    );
}
export default Product;