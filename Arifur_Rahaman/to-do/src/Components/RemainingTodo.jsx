import React from 'react';
import Box from '@mui/material/Box';
import TodoList from './TodoList';
const RemainingTodo = ({todos, completeTodo}) => {
    return (
        <Box>
            {
                todos.map(todo=>!todo.complete&& <TodoList key={todo.id} todo={todo} completeTodo={completeTodo}/>)
            }
        </Box>
    );
};

export default RemainingTodo;