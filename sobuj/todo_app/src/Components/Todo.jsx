import React, { useState } from "react";

import { Container, Grid, Typography, Paper, TextField, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Avatar, Link, Stack, Step } from "@mui/material";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CreateIcon from '@mui/icons-material/Create';
import SaveIcon from '@mui/icons-material/Save';

const styles ={
    sectionHeading:{
        fontFamily:"Arial",
        fontWeight: "700",
        color: "#CCC",
        borderBottom:"2px solid #8c363e",
        borderWidth:"20%",
        textAlign:"center"
    },
    sectionText:{
        marginTop: "5px",
        fontSize: "16px",
        color: "#CCC",
        letterSpacing: "0.5px",
    },
    sectionHeadBtmLine:{
        width: "60px",
        height: "3px !important",
        backgroundColor: "#a43f49",
        margin: "10px auto",
    },
    cardFeatureImage:{
        borderRadius:"5px",
        maxHeight:"250px",
    },
    section:{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        color:"#FFF",
        borderRadius:"5px",
        minHeight:"600px",
    },
    cardStyle:{
        width:"33%",
    } 
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


  //Component Started
const Todo = () =>{

const [task, setTask]=useState("");
const [error, setError]=useState(false);
const [edit, setEdit]=useState(false);
const [taskList, setTaskList]=useState([]);
const  [taskIndex, setTaskIndex]=useState("");
const [prevTaskData, setPrevTaskData] = useState("");
const addTask = () =>{
    if(task.length){ 
        const prevTask = [...taskList];
        prevTask.push(task);
       setTaskList(prevTask);
    }else{
        setError(true);
    }
};
const delTask = (index) =>{
    //alert(index)
    const prevTask = [...taskList];
    prevTask.splice(index, 1);
    setTaskList(prevTask);
}
const editTask = (index, task) =>{
    //alert(index)
    setEdit(true);
    setTaskIndex(index);
    setPrevTaskData(task);
}
const editTaskAction = (taskIndex, task) =>{
    // alert(task);
    const prevTask = [...taskList];
    prevTask.splice(taskIndex, 1, task);
    setTaskList(prevTask);
    setEdit(false);
}
const settaskName = (e) =>{
    // alert(e.target.value);
    setError(false);
    setTask(e.target.value);
}
    return <>
    <Grid item container spacing={2} justifyContent="center" style={styles.section}>
        
        <Grid container justifyContent="center">
            <Item sx={6} style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                To Do Application
                            </Typography>
                            {
                                (edit!==true)? 
                                (
                                    <>
                                    <Typography gutterBottom variant="subtitle1" component="h2">
                                        Task Name
                                    </Typography>
                                    <TextField
                                    onChange={(e)=>settaskName(e)}
                                    fullWidth
                                        error={error}
                                        id="outlined"
                                        label="Task Name"
                                        defaultValue=""
                                        
                                        helperText={error? "Must fill the task field!":""}
                                        variant="outlined"
                                        value={task}
                                    />
                                    <Button sx={{ mt:5 }} onClick={addTask} variant="contained" startIcon={<SaveIcon />}  color="success">
                                    Add Task
                                    </Button>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Typography gutterBottom variant="subtitle1" component="h2">
                                           Update Task Name
                                        </Typography>
                                        <TextField
                                        onChange={(e)=>settaskName(e)}
                                        fullWidth
                                            error={error}
                                            id="outlined"
                                            label="Task Name"
                                            defaultValue={task}
                                            
                                            helperText={error? "Must fill the task field!":""}
                                            variant="outlined"
                                           
                                            value={task}
                                        />
                                        <Button sx={{ mt:5 }} onClick={()=>{editTaskAction(taskIndex, task)}} startIcon={<CreateIcon />}  variant="contained" color="secondary">
                                        Update Task
                                        </Button>
                                    </>
                                )
                            
                            }
                            

                        </CardContent>
                    </CardActionArea>
                     
                </Card>
            </Item>
            <Item xs={6}>
                <Card xs={12}>
                    <CardActionArea >
                        <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                            Task List
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Task Detail</StyledTableCell>
                                    <StyledTableCell align="right">Edit Task</StyledTableCell>
                                    <StyledTableCell align="right">Delete Task</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {taskList.map((task, index)=>{
                                    return (
                                    <StyledTableRow key={task}>
                                    <StyledTableCell component="th" scope="row">
                                        {task}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button 
                                        size="small" 
                                        variant="contained"  color="warning"
                                        startIcon={<CreateIcon />}  
                                        onClick={()=>{editTask(index, task)}}
                                        >Edit</Button>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button 
                                        size="small"  
                                        startIcon={<DeleteIcon />} 
                                        variant="contained" color="error"
                                        onClick={()=>{delTask(index)}}
                                        >Delete</Button>
                                    </StyledTableCell>
                                    </StyledTableRow>
                                )
                                 
                                 
                            })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                         
                        </CardContent>
                    </CardActionArea>
                     
                </Card>
            </Item>
        </Grid>
    </Grid>


    </>
}
export default Todo;