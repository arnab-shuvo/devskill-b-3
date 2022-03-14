import './App.css';
import {useDispatch,useSelector} from 'react-redux';


function App() {
  const dispatch =useDispatch();
  const {counter} = useSelector((store)=> store);

  const increaseCounter=(value)=>{
    const payloadValue= value === 'increase' ? counter+1
    : value === 'decrease' ? counter-1
    : value === 'increaseBy2x' ? counter+2
    : counter-2;
    dispatch(
      {
        type: value,
        payload: payloadValue,
      })
  }
  return (
    <>
    <h2> Counter: {counter}</h2>
    <button onClick={()=>increaseCounter('increase')}>Increase</button>
    <button onClick={()=>increaseCounter('decrease')}>Decrease</button>
    <button onClick={()=>increaseCounter('increaseBy2x')}>Increase By 2x </button>
    <button onClick={()=>increaseCounter('decreaseBy2x')}>Decrease By 2x</button>
    </>
  );
}

export default App;
