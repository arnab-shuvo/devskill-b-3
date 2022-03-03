import Grid from '@mui/material/Grid';
import React,{useState} from 'react';
import './genre.css';
const GenreC=()=>{
    const [gimages,setGImages]= useState([
        {
            id:1,
            img:'https://abe.com.bd/images/homebanner/1618135421WKXJtICBRTNh.jpg'
        },
        {
            id:2,
            img:'https://quadcubes.com/uplu/2020/12/mubarack-product-photoshoot-calicut.jpg'
        },
        {
            id:3,
            img:'https://media.istockphoto.com/photos/flat-lay-of-modern-mens-clothing-on-a-wooden-background-picture-id665032164?b=1&k=20&m=665032164&s=170667a&w=0&h=17_O0sKPUpoIWLBcIzuVUCe9RnoorOZvuUFMjHJcI1Q='
        },
        {
            id:4,
            img:'https://www.oberlo.com/media/1603955896-clothing-accessories-flatlay-1.jpg'
        }
    ])
return(
    <>
    <div>
    <Grid conatiner justifyContent={'center'} spacing={2}>
    <Grid item container md={12}>
    <Grid item xs={12}>
    <h2>Genre</h2>
    </Grid>
    </Grid>
    {gimages.map((gimage)=>{
    return(
        <Grid item container md={3}>
            <Grid xs={12}>
            
                <img src={gimage.img} alt="category" className='imageG'/>
            
            </Grid>
        </Grid>
    )
        })}
    </Grid>
    </div>
    </>
);
}
export default GenreC;