import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((store) => store);
  const type = (value) => {
    dispatch({
      type: "increase",
      payload: value,
    });
  };

  return (
    <>
      <p>Counter :{counter}</p>
      <button onClick={() => type(counter + 1)}>Increase</button>
      <button onClick={() => type(counter - 1)}>Decrease</button>
    </>
  );
}

export default App;
