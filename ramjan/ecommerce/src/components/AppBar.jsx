import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Button, Grid } from '@mui/material';
import React from 'react';

const styles = {
    menus: {
        display: 'flex',
        flexDirection: 'row',
    },
    buttonColor: {
        color:'#000000'
    },
    menueContent: {
        marginRight: '10px',
        color: '#000000',
    },
    horizontalMargin: {
        marginTop: '15px',
        marginBottom: '15px'
    },
    promo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',  
    },
}
function AppBar() {
    const menues = ['Home', 'Dress', 'Glasses', 'Jacket']
    return (
      <Grid container style={styles.horizontalMargin}>
          <Grid item xs={12} sm={6} md={6} style={styles.menus}>
                {
                    menues.map((menu, index)=> 
                        <Button key={ index } variant='text' style={styles.menueContent}>  {menu }  </Button>
                    )
                }
            </Grid>
            <Grid style={ styles.promo } item xs={12} sm={6} md={6}>
                <Button style={ styles.buttonColor} variant='text' startIcon={<ThumbUpOutlinedIcon/>}> 14 Dayes Mone Banck </Button>
               <Button style={ styles.buttonColor} variant='text' startIcon={<InsertEmoticonOutlinedIcon/>}> Promo Code</Button>
            </Grid>
          
    </Grid>
  )
}

export default AppBar