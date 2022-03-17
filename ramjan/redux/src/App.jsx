import { Button, Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { DecreaseAction, IncreaseAction } from './store/action/counterAction/';


function App() {
  const dispatch = useDispatch()
  const store = useSelector((store) => store.countStore)
  const { counter } = store;
  
  const increaseConter = (value) => {
    dispatch(IncreaseAction(value))
}
  const decraseConter = (value) => {
    dispatch(DecreaseAction(value))
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
