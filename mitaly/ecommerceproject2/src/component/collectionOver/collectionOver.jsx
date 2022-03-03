import { Grid } from "@mui/material";
import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cv1 from './../../assets/images/4.png';
import cv2 from './../../assets/images/5.png';
import cv3 from './../../assets/images/6.png';
import cv4 from './../../assets/images/7.png';

const CollectionOver=()=>{
    const items1=
        {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv1 
         }
    
    const [items2,setItem2]=useState([

        {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv2
         },
         {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv3
         },
         {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv4
         }
    ])
    return(
    <Grid container >
        <Grid item container md={4}>
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
                title={items1.title}
                subheader={items1.quantity}
                />
                <CardMedia
                component="img"
                height="194"
                image={items1.img}
                alt="Paella dish"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {items1.status}
                </Typography>
                </CardContent>
                
                              
                            </Card>
            </Grid>
        </Grid>
        <Grid item container md={4}>
            <Grid item xs={12}>
            
            {items2.map((item)=>{
                    <ul>
                        <li> {item.title}</li>
                        <li> {item.id}</li>
                    </ul>
                            })}
                            
            </Grid>
        </Grid>
        <Grid item container md={4}>
            <Grid item xs={12}>
                
            </Grid>
        </Grid>
    </Grid>
    );
}
export default CollectionOver;