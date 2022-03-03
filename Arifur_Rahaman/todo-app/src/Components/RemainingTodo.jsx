import React from 'react';
import Box from '@mui/material/Box';
import TodoList from './TodoList';
const RemainingTodo = ({todos, completeTodo, deleteTodo, editTodo}) => {
    return (
        <Box>
            {
                todos.map(todo=>!todo.complete&& <TodoList key={todo.id} todo={todo} completeTodo={completeTodo} editTodo={editTodo} deleteTodo={deleteTodo}/>)
            }
        </Box>
    );
};

export default RemainingTodo;