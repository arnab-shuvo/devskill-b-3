import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { increaseAction, decreaseAction } from "./store/action/counterAction";


function App() {

const dispatch = useDispatch();
const store = useSelector((store) => store.counterStore)
const { counter } = store;
console.log(store, "===store");
const functionCounterIncr = (value) =>{
  dispatch(increaseAction(value));
}
const functionCounterDcr = (value) =>{
  dispatch(decreaseAction(value));
};

  return (
     <>
      <div style={{ textAlign:"center"}}>
          <h1>Counter: {counter}</h1>
          <button onClick={() =>functionCounterIncr(counter + 1)}>Increase</button>
          <button onClick={() =>functionCounterDcr(counter - 1)}>Decrease</button>
      </div>
     </>
  );
}

export default App;

