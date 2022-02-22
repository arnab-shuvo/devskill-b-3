import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import TaskList from "./TaskList";

const TaskInput = styled("div")`
  padding-bottom: 20px;
`;
const TaskContent = styled.div`
  border: 1px solid #ddd;
  min-height: 200px;
  padding: 10px;
  margin: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
`;
const ButtonContent = styled(Button)`
  height: 55px;
`;

const Task = () => {
  let taskData = {
    name: "",
    id: 0,
  };

  const [submitName, setSubmitName] = useState("Add Task");
  const [task, setTask] = useState(taskData);
  const [error, setError] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const helpText = "Please enter task";

  const addTaskList = () => {
    if (task.name.length > 0) {
      if (task.id < 1) {
        taskData = {
          name: task.name,
          id: taskList.length + 1,
        };
        setTaskList((taskList) => [...taskList, taskData]);
      } else {
        taskList.map((element, i) => {
          if (element.id === task.id) {
            element.name = task.name;
          }
        });
        setTaskList((taskList) => [...taskList]);
      }
      clearData();
    } else {
      setError(true);
    }
  };
  const clearData = () => {
    let taskData = {
      name: "",
      id: 0,
    };
    setTask(taskData);
    setSubmitName("Add Task");
  };
  const deleteTaskList = (data, index) => {
    debugger;
    if (data) {
      taskList.splice(index, 1);
      setTaskList((taskList) => [...taskList]);
    }
  };
  const editTaskList = (data, index) => {
    debugger;
    if (data) {
      setTask(data);
      setSubmitName("Update Task");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TaskContent>
          <TaskInput>
            <Grid container spacing={0}>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  label="Task"
                  type="text"
                  fullWidth
                  error={error}
                  helperText={error ? helpText : ""}
                  onChange={handleChange}
                  value={task.name}
                  name="name"
                />
              </Grid>
              <Grid item xs={2}>
                <ButtonContent variant="outlined" onClick={() => addTaskList()}>
                  {submitName}
                </ButtonContent>
              </Grid>
            </Grid>
          </TaskInput>

          {taskList.length > 0 ? (
            <TaskList taskList={taskList} deleteTaskList={deleteTaskList} editTaskList={editTaskList} />
          ) : (
            ""
          )}
        </TaskContent>
      </Grid>
    </Grid>
  );
};

export default Task;
