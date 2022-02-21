import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

const styles = {
    marginHorizontal: {
        marginTop: '20px',
        marginBottom : '20px'
    },
    card: {
        textAlign: 'center',
        height : '100%'
    },
    list: {
        textAlign: 'left',
        marginTop: '20px',
        marginBottom : '20px'
        
    }
}


function CardItem(props) {
  return (
      <div>
          <Grid container className='center' style={styles.list}>
    <Grid item xs={10} >
        <Card>
            <CardContent>
                <Typography variant='subtitle1'> { props.task } </Typography>
                <ButtonGroup>
                    <Button
                        variant='contained'
                        onClick={() => {
                        props.onSelectDelete(props.id)
                        }}> Delete
                    </Button>
                    <Button
                                  variant='contained'
                                  onClick={() => {
                                    props.onSeleectEdit(props.id)
                                  }}
                    > Edit </Button>
                </ButtonGroup>
            </CardContent>
       </Card>
    </Grid> 
          </Grid>
      </div>
  )
}

export default CardItem