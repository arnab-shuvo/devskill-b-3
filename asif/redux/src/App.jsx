import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./app.css";
const App = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="counter-wrapper">
        <button
          onClick={() =>
            counter > 0 &&
            dispatch({
              type: "decreament",
            })
          }
        >
          -
        </button>
        <h3>{counter}</h3>
        <button onClick={() => dispatch({ type: "increament" })}>+</button>
      </div>
    </div>
  );
};

export default App;
