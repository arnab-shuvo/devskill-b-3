import React from 'react';
import { IconButton, Paper, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
const TodoList = ({ todo, completeTodo }) => {
    return (
        <Paper elevation={6} sx={{ p: '10px', m: '10px', borderRadius: '20px' }}>
            {
                todo.complete
                    ?<Stack direction='row' alignItems='center'>
                    <Stack direction='row' alignItems='center'>
                        <Checkbox checked={todo.complete} onChange={() => completeTodo(todo)} />
                        <Typography variant='subtitle1' sx={{ fontWeight: '500' }}><del>{todo.text}</del></Typography>
                    </Stack>
                    <Stack>

                    </Stack>
                </Stack> 
                    
                    : <Stack direction='row' alignItems='center'>
                        <Stack direction='row' alignItems='center'>
                            <Checkbox checked={todo.complete} onChange={() => completeTodo(todo)} />
                            <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>{todo.text}</Typography>
                        </Stack>
                        <Stack>

                        </Stack>
                    </Stack>
            }
        </Paper>
    );
};

export default TodoList;
