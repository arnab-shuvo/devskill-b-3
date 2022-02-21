import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import CardItem from '../components/CardItem';
import '../components/css/Style.css';
import Empty from '../images/empty.png';


const styles = {
    marginHorizontal: {
        marginTop: '20px',
     
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


function Lists() {
    const [inputList, setInputList] = useState('')
    const [error, setError] = useState(false);
    const [taskList, setTaskList ] = useState([])

    const addtask = () => {
       
        if (inputList.length) {
            const previousTask = [...taskList]
            previousTask.push(inputList)
            setTaskList(previousTask)
            setInputList('')
        } else {
            setError(true)
        }
        
}
    const changeHandle = (e) => {
            setError(false)
            setInputList(e.target.value)
    }
    
    const clearAll = ()=> {
        setTaskList([])
    }
    const deleteItems = (id) => {

        setTaskList([...taskList].filter((items, index) => {
            return index !== id;
        }))

    }
    const editItem = (id) => {
            console.log(id);
    }
    
    return (
      <Grid container className='center background' style={styles.marginHorizontal}>
          <Grid item xs={8}>
              <Card style={styles.card} >
                  <CardContent>
                     <Typography variant='h3'> ToDo App </Typography> 
                    </CardContent>
                
                    <Grid container spacing={ 2 } className='center' >
                        <Grid item xs={9} md={8} >
                            <TextField
                                error = {error}
                                helperText ='Enter Valid Word'
                                fullWidth
                                label='add your new todo'
                                variant='filled'
                                onChange={ (e)=> changeHandle(e) }
                                
                        />
                        </Grid> 
                        <Grid item xs={1} md={2}>
                            <Button
                                fullWidth
                                onClick={addtask}
                               
                                variant="contained"
                                color="primary"> +
                            </Button>
                        </Grid>
                    </Grid> 
                    {/* List will show here */}
                    {
                        taskList.length === 0 ? <img src={ Empty } alt='empty' /> :
                        taskList.map((task, index) => 
                            <CardItem
                                key={index}
                                id={index}
                                task={task}
                                onSelectDelete={deleteItems}
                                onSeleectEdit ={editItem}
                            />
                        )
                    }

                    {/* End list */}

                    
                    {/* Items number */}
                    <Grid container className='center' style={styles.list}>
                        <Grid item xs={10} >
                            <Card>
                                <CardActions style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Typography> You Have { taskList.length } items </Typography>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={ clearAll }
                                    > 
                                        Clear all
                                    </Button>
                                </CardActions>
                           </Card>
                        </Grid> 
                    </Grid> 
                    {/* End list */}
                    
                </Card>
               
          </Grid>
    </Grid>
  )
}

export default Lists