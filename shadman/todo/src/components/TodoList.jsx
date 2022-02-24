import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const styles = {
    task: {
      listStyleType: "none",
      margin: "5px",
      padding: "5px",
    },

    taskstyle :{
        margin: '5px',
        padding: '5px'
    }

  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.task}>
      {todos.map((todo) => {
        return (
          <li style={styles.task} key={todo.id}>
 
            <span style={styles.taskstyle}>{todo.title}</span>
            <Button
              onClick={() => handleEdit(todo)}
              variant="contained"
              size="small"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>{" "}
            <Button
              onClick={() => handleDelete(todo)}
              variant="contained"
              size="small"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>{" "}
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
