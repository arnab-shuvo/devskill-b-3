import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    // alert("hi");
    // push(task);
    if (task.length) {
      // alert(task);
      const listOfItems = [...taskList];
      listOfItems.push(task);
      setTaskList(listOfItems);
      // console.log(listOfItems);
    } else {
      setError(true);
    }
  };
  const setTaskName = (e) => {
    setTask(e.target.value);
    setError(false);
  };
  const deleteTask = (task) => {
    const deleteItemArray = [...taskList];
    // console.log(deleteItemArray);
    const getIndex = deleteItemArray.indexOf(task);
    // console.log(getIndex);
    if (getIndex !== -1) {
      deleteItemArray.splice(getIndex, 1);
      setTaskList(deleteItemArray);
    }
  };
  const editTask = (task) => {
    const editArrayItem = [...taskList];
    const getIndex = editArrayItem.indexOf(task);

    if (getIndex !== 0) {
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#0A1929",
        color: "#eead0e",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <h2 style={{ color: "#eead0e", fontSize: "3rem" }}>To Do App</h2>
        <Grid
          style={{ textAlign: "center" }}
          xs={{ justifyContent: "center" }}
          container
          spacing={2}
        >
          <Grid item xs={{ justifyContent: "center" }} xs={12}>
            <TextField
              style={{
                outline: "#eead0e",
                border: "1px solid #eead0e",
                borderRadius: "10px",
                color: "#fff",
              }}
              id="standard-basic"
              error={error}
              helperText={error ? "not right." : ""}
              value={task}
              color={"primary"}
              onChange={(e) => setTaskName(e)}
            />
            <IconButton
              onClick={addTask}
              aria-label="upload picture"
              component="span"
            >
              <AddCircleOutlineIcon
                style={{ color: "#eead0e", width: "40px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {taskList.map((task) => {
              return (
                <ul>
                  <li
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      listStyle: "none",
                    }}
                  >
                    {task}
                    {/* <input type=”hidden” id=”saveIndex” /> */}
                    <IconButton
                      style={{ margin: "0px 20px" }}
                      onClick={() => deleteTask(task)}
                      aria-label="upload picture"
                      component="span"
                    >
                      <DeleteIcon style={{ color: "#eead0e", width: "40px" }} />
                    </IconButton>

                    <button onClick={() => editTask(task)}>Edit</button>
                  </li>
                </ul>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
