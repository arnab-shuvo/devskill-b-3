import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
// import {increaseAction, decreaseAction, increaseAction } from "./store/action/counterAction";
import { increaseAction } from './store/action/counterAction';
import { decreaseAction } from './store/action/counterAction';
// const counter = 0;

function App() {

const dispatch = useDispatch();
const store = useSelector((store)=>store.counterStore);
const { counter } = store;
console.log(store);

const increaseCounter=(value)=>{
  dispatch(increaseAction(value));
};
const decreaseCounter=(value)=>{
  dispatch(decreaseAction(value));
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
