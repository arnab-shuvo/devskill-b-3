
import * as React from 'react';

import { Modal, Box, Card, CardActions, CardContent, Button, Typography, Grid, Paper } from '@material-ui/core'
import { useState } from 'react';
import AddTodo from './AddTodo';
import { makeStyles } from '@material-ui/styles';
import TaskCard from './TaskCard';
import EditTask from './EditTask';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(10), 
    padding: theme.spacing(3)
  }
}))

export default function TodoList() {
  const classes = useStyles; 
  const [open, setOpen] = useState(false);
 

  const [tasks, setTasks] = useState([]);
  
  const onSubmit = (log) => {
    let logs = [...tasks, log];
    setTasks(logs);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task !== id))
  }
  
  const [editing, setEditing] = useState(false);
  const initialFormState = { name: ''}
  const [currentTask, setCurrentTask] = useState(initialFormState)

  // const editTask = (id) => {
  //   console.log(id);
  //   setTasks(tasks.filter((task) => task !== id))
  //   console.log(tasks);
  // }
  
  const editRow = (id) => {
    setEditing(true);
    setCurrentTask({ name: id })
  }

  const updateTask = (existingTask, updatedTask) => {
    console.log(existingTask, updatedTask )

    // setEditing(false)
  
    // setTasks(tasks.map((item) => (item === existingTask ? updatedTask : existingTask)))
  }
  return (
    
      <>
        <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '30vh' }}>
        <Paper className={classes.pageContent}>
          <AddTodo onSubmit={onSubmit}/> 
        </Paper>
        <h1>My Todo</h1>
        <TaskCard tasks={tasks} deleteTask={deleteTask} editRow={editRow}></TaskCard>
        

        {editing ? (
          <div>
            <h2>Edit Task</h2>
            <EditTask
              setEditing={setEditing}
              currentTask={currentTask}
              updateTask={updateTask}
            />
          </div>
        ) : ''}
        </Grid>
      </>
    );
}

