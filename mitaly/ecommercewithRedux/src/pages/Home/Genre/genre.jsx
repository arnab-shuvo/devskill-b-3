import Grid from '@mui/material/Grid';
import React,{useState} from 'react';
import './genre.css';
import home1 from './../../../assets/Images/1.png';
import home2 from './../../../assets/Images/home2.png';
import home3 from './../../../assets/Images/home3.png';
import home4 from './../../../assets/Images/home4.png';
const GenreC=()=>{
    const [gimages,setGImages]= useState([
        {
            id:1,
            img:home1
        },
        {
            id:2,
            img:home2
        },
        {
            id:3,
            img:home3
        },
        {
            id:4,
            img:home4
        }
    ])
return(
    <>
    <div>
    <Grid container justifyContent={'center'} spacing={2}>
    <Grid item container md={12}>
    <Grid item xs={12}>
    <h2>Genre</h2>
    </Grid>
    </Grid>
    </Grid>
    <Grid container>
    {gimages.map((gimage,index)=>{
        if(index===0 || index===3){
    return(
        
        <Grid item container md={4}>
            <Grid item xs={12}>
            <div><img src={gimage.img} alt="category" className='imageG'/></div>
                
            
            </Grid>
        </Grid>
        
    )}
    else{
        return(
            
            <Grid item container md={8}>
                <Grid item xs={12}>
                
                    <div><img src={gimage.img} alt="category" className='imageH'/></div>
                
                </Grid>
            </Grid>
            
        )}
        })}
   </Grid>

    </div>
    </>
);
}
export default GenreC;