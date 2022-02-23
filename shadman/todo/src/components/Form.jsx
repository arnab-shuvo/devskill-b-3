import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  error,
  setError,
}) => {
  const styles = {
      textfield:{
          paddingRight: '10px',
      },

  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setError(false);
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    if (input.length) {
      if (!editTodo) {
        e.preventDefault();
        // console.log(todos)
        setTodos([
          ...todos,
          {
            id: 1 + Math.floor(Math.random() * 10000),
            title: input,
            completed: false,
          },
        ]);
        // console.log(todos)
        setInput("");
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Container>
        <TextField style = {styles.textfield}
          error={error}
          id="outlined-error-helper-text"
          value={input}
          label="Add Your Task"
          defaultValue="Hello World"
          helperText={error ? "Please Add a Task." : null}
          onChange={onInputChange}
          size="small"
        />
        <Button variant="contained" onClick={onFormSubmit}>
          {editTodo ? "OK" : "Add"}
        </Button>
      </Container>
    </div>
  );
};

export default Form;
