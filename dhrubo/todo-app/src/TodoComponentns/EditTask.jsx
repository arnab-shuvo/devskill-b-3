import { Grid } from '@material-ui/core';
import React, { useState } from 'react'

const EditTask = (props) => {
  const existingTask = props.currentTask; 

  const [task, setTask] = useState(props.currentTask)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }

  return (
    <Grid 
       >
      <form
      onSubmit={(event) => {
        event.preventDefault()
        
        props.updateTask(existingTask, task)
      }}
    >
      <label>Name {props.name}</label>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
      />
      
      <button>Update Task</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
    </Grid>
  )
}

export default EditTask;