import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const Home = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(false);
  const [toEdit, setToEdit] = useState(null);

  const addTask = () => {
    if (task.length) {
      const previousTask = [...taskList];
      previousTask.push(task);
      setTaskList(previousTask);
    } else {
      setError(true);
    }
  };
  const setTaskName = (e) => {
    setError(false);
    setTask(e.target.value);
  };
  const deleteTask = (index) => {
    const previousTask = [...taskList];
    previousTask.splice(index, 1);
    setTaskList(previousTask);
  };
  const submitTask = () => {
    const previousTask = [...taskList];
    previousTask.splice(toEdit, 1, editedTask);
    setTaskList(previousTask);
  };
  const editTask = (index) => {
    setEdit(true);
    const toBeEdited = taskList[index];
    setEditedTask(toBeEdited);
    setToEdit(index);
  };
  return (
    <Grid container justifyContent={"center"}>
      <h2 style={{ color: "Green" }}>To Do App</h2>
      <Grid item md={6} container spacing={2}>
        <Grid item md={6}>
          <TextField
            onChange={(e) => setTaskName(e)}
            fullWidth
            error={error}
            id="outlined"
            helperText={error ? "Task name is required" : ""}
            Value={task}
          />
          <Button onClick={addTask} variant="contained">
            Add task
          </Button>
          {edit && (
            <>
              {" "}
              <TextField
                onChange={(e) => setEditedTask(e.target.value)}
                fullWidth
                error={error}
                id="outlined"
                helperText={error ? "Task name is required" : ""}
                Value={task}
              />
              <Button onClick={submitTask} variant="contained">
                Edit Task
              </Button>
            </>
          )}
        </Grid>
        <Grid item md={6}>
          {taskList.map((task, index) => {
            return (
              <li class="a">
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => editTask(index)}>Edit</button>
                {task}
              </li>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Home;
