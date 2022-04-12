import { Button, Grid } from "@mui/material";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(false);
  const [toEdit, setToEdit] = useState(null);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
