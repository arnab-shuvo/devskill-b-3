import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react';

const styles = {
    search: {
        display: 'flex',
        flexDirection: 'row'
    },
    main: {
       marginTop: '5px'
       
    },
    account: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',  
    },
    buttonOverrid: {
        borderRadius: '0px 2px 2px 0px',
        backgroundColor: '#000000'
    },
    inputOverrid: {
        borderRadius: '0px 0px 0px 0px',
        height: '10px', 
    },
    buttonColor: {
        color: '#fff',
        backgroundColor: '#000000'
    }
}

function Searchbar() {
  return (
      <Grid container style={styles.main} spacing={ 2 } justifyContent='flex-end'>
            <Grid item >
                <ButtonGroup>
                    <Button style={ styles.buttonColor} startIcon={<PermIdentityOutlinedIcon color='#000000' />}> Account </Button>
                    <Button style={ styles.buttonColor} startIcon={<ShoppingBagOutlinedIcon />}>
                        Bag
                    </Button>
                </ButtonGroup>
            </Grid> 
    </Grid>
  )
}

export default Searchbar