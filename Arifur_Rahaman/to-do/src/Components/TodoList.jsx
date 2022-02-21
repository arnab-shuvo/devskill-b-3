import React from 'react';
import { IconButton, Paper, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
const TodoList = ({ todo, completeTodo, editTodo, deleteTodo }) => {
    return (
        <Paper elevation={6} sx={{ p: '10px', m: '10px', borderRadius: '20px' }}>
            {
                <Stack direction='row' justifyContent='space-between'>
                    <Stack direction='row' alignItems='center'>
                        {
                            todo.complete
                            ?<Checkbox checked={todo.complete}/>
                            :<Checkbox checked={todo.complete} onChange={() => completeTodo(todo)} />
                        }
                        <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>
                            {todo.complete? <del>{todo.text}</del> : <>{todo.text}</>}
                        </Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        {!todo.complete && <IconButton sx={{ color: '#42a5f5' }} onClick={() => editTodo(todo)}><EditIcon></EditIcon></IconButton>}
                        <IconButton sx={{ color: 'red' }} onClick={() => deleteTodo(todo)}><DeleteIcon /></IconButton>
                    </Stack>
                </Stack>
            }
        </Paper>
    );
};

export default TodoList;
