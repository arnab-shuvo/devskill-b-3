import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [page, setPage] = useState("task");
  const pageRoute = (value) => {
    setPage(value);
  };
  return <div className="App">{page === "task" && <Task />}</div>;
}

export default App;
