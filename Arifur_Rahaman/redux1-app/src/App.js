import './App.css';
import {useSelector, useDispatch} from 'react-redux';
function App() {
  const counter = useSelector(state=>state);
  const dispatch = useDispatch();

  const increment = ()=>{
    return {
      type: 'INCREMENT'
    }
  }
  
  const decrement = ()=>{
    return {
      type: 'DECREMENT'
    }
  }

  return (
    <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
