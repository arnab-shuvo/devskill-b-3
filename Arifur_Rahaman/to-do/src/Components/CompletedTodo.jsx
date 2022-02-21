import React from 'react';
import Box from '@mui/material/Box';
import TodoList from './TodoList';
const CompletedTodo = ({todos, deleteTodo}) => {
    return (
        <Box>
            {
                todos.map(todo=>todo.complete&& <TodoList key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)
            }
        </Box>
    );
};

export default CompletedTodo;