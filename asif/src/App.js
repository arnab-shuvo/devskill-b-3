import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState({
    now: false,
    index: null,
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!data) return alert("Please Add Item First!");
    if (editing.now) {
      setTasks([
        ...tasks.slice(0, editing.index),
        data,
        ...tasks.slice(editing.index + 1),
      ]);
      setEditing({ now: false, index: null });
      return setData("");
    }
    setTasks([...tasks, data]);
    return setData("");
  };

  const edit_task = (index) => {
    setData(tasks[index]);
    setEditing({ now: true, index: index });
  };

  return (
    <div className="container">
      <h2>Todo App</h2>
      <div className="form-container">
        <form className="form" onSubmit={onFormSubmit}>
          <TextField
            label="task"
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="text"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setData("")}
          >
            Clear
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      </div>
      <div className="tasks-list">
        {tasks.length == 0 ? (
          <Typography align="center" variant="h3" color="textSecondary">
            No Task Add Yet!
          </Typography>
        ) : (
          tasks.map((task, index) => (
            <div className="task-container">
              <div className="task-info">
                <p>{task}</p>
              </div>
              <div className="task-actions">
                <Button
                  onClick={() => edit_task(index)}
                  variant="outlined"
                  color="default"
                >
                  Edit
                </Button>
                <Button
                  onClick={() =>
                    setTasks([
                      ...tasks.slice(0, index),
                      ...tasks.slice(index + 1),
                    ])
                  }
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
