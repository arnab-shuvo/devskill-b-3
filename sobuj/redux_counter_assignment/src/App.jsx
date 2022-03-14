import logo from './logo.svg';
import './App.css';
// import {useDispatch, useSelector} from "react-redux";
import Counter from "./Features/Counter/Counter";

function App() {

// const dispatch = useDispatch();

// const { counter } = useSelector((store)=>store)

// const functionCounter = (value) =>{
//   if (value >= 0){
//     dispatch({
//       type:"increase",
//       payload: value,
//     });
//   }
    
// };
  return (
     <>
      
      <Counter />
      
      {/* <div style={{ textAlign:"center"}}>
          <h1>Counter: {counter}</h1>
          <button onClick={() =>functionCounter(counter + 1)}>Increase</button>
          <button onClick={() =>functionCounter(counter - 1)}>Decrease</button>
      </div> */}
      
     </>
  );
}

export default App;
