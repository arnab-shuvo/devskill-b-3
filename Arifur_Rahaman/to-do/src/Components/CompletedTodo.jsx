import React from 'react';
import Box from '@mui/material/Box';
import TodoList from './TodoList';
const CompletedTodo = ({todos}) => {
    return (
        <Box>
            {
                todos.map(todo=>todo.complete&& <TodoList key={todo.id} todo={todo}/>)
            }
        </Box>
    );
};

export default CompletedTodo;