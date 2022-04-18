import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { SidebarData } from '../../lib/SidebarData';
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
function Sidebar() {
   
    // const [categories, setSategories] = useState([]); 
    // useEffect(() => {
    //     fetch('http://localhost:8080/category')
    //       .then((res)=> res.json())
    //       .then( json => 
    //         setSategories(json)
    //       )
    // }, []);

    const categoryList = useSelector((store) => store.categoryStore)
    const { categories} = categoryList
    

    
    const categoryLink = '/products/category/'
    return (
      <>
      <Grid item xs={12} sm={3} md={ 3 }>
                <Box style={styles.boxBG}>
                      Shop By Categories 
                </Box> 
                <>
                {
                SidebarData.map((menue, index) => 
                    <Box my={1} style={styles.verMenue} key={index}>
                        <a href={categoryLink + menue.id}> 
                            <Button style={styles.verivalButton}> {menue.name } </Button> 
                        </a>
                    </Box>
                    )        
                }
                  </>
            </Grid>
      </>
  )
}

export default Sidebar;

