import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField} from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function AddTodo({ onSubmit }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [name, setName] = useState("");

    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(e); 
        if(name !== ''){
            onSubmit([name])
            alert(`Your task: ${name} added successfully`)
        } else{
            alert('Task Can not be empty'); 
        }
        
      }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Task
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Add Task</h2>
                    
                    <form onSubmit={e => { handleSubmit(e) }}>
                        <Grid>
                            <Grid>
                            <TextField
                                style={{ marginBottom: 20 }}
                                fullWidth
                                margin="dense"
                                variant="outlined"
                                label="Task Name"
                                defaultValue=""
                                id="task"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                ></TextField>
                            </Grid>
                        </Grid>
                        <input type="submit" />
                    </form>

                </div>
                
            </Modal>
        </div>
    );
}