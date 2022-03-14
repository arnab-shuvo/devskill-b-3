import { Button, Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {
  const dispatch = useDispatch()
  const {counter} = useSelector((store) => store)

  console.log(counter)
  const increaseConter = (value) => {
    dispatch({
      type: 'increase',
      payload : value,
    })
}
  const decraseConter = (value) => {
    dispatch({
      type: 'decrease',
      payload : value,
    })
}
  
  return (
    <Container>
      <Grid container>
        <Grid item>
          <Typography> Counter : {counter}</Typography>
          <Button onClick={()=> increaseConter(counter + 1)}> Increase </Button>
          <Button onClick={()=> decraseConter( counter - 1)}> Decrease </Button>
        </Grid>
      </Grid>
   </Container>
  )
}

export default App
