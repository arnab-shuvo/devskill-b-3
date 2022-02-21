import React from 'react';
import { Box, styled } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';

const SearchBox = styled('input')(({ theme }) => ({
    width: '300px',
    height: '40px',
    border: 'none',
    '&:focus': {
        outline: 'none'
    },
}))
const SerBoxContainer = styled(Box)(({ theme }) => ({
    border: '1px solid black',
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: '5px',
    borderRadius: '10px'
}))
const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true)

    const handleInputChange = (event)=>{
        setText(event.target.value);
        if(text.trim().length>=10){
            setButtonDisable(false)
        }else{
            setButtonDisable(true)
        }
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            text
        }
        addTodo(newTodo);
        
        setButtonDisable(true);
        setText('');

        
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SerBoxContainer>
                <form onSubmit={handleFormSubmit}>
                    <Stack direction='row' alignItems='center'>
                        <Button type='submit' disabled={buttonDisable}>
                            <AddCircleIcon />
                        </Button>
                        <SearchBox 
                            placeholder='Write your task here' 
                            onChange={handleInputChange} 
                            value={text} 
                        />
                    </Stack>
                </form>
            </SerBoxContainer>
        </Box>
    );
};

export default TodoForm;