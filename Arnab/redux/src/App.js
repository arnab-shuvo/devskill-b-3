import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseAction, decreaseAction } from "./store/action/counterAction";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.counterStore);
  const { counter } = store;

  const increaseCounter = (value) => {
    dispatch(increaseAction(value));
  };

  const decreaseCounter = (value) => {
    dispatch(decreaseAction(value));
  };
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => increaseCounter(counter + 1)}>Increase</button>
      <button onClick={() => decreaseCounter(counter - 1)}>Decrease</button>
    </>
  );
}

export default App;
