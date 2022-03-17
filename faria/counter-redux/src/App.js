import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

// const counter = 0;

function App() {

const dispatch = useDispatch();
// const store = useSelector((store)=>store);
const {counter} = useSelector((store)=>store);

const increaseCounter=(value)=>{
dispatch({
  type:"increase",
  payload: value,
});
};
const decreaseCounter=(value)=>{
  dispatch({
    type:"decrease",
    payload: value,
  });
  };

  return (
    <>
    <p>Counter: {counter}</p>
    <button onClick={()=>increaseCounter(counter+1)}>increase</button>
    <button onClick={()=>decreaseCounter(counter-1)}>decrease</button>

    </>
  );
}

export default App;
