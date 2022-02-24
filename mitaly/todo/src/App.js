import './App.css';
import {useState} from 'react';
import {Grid, Button} from "@mui/material";
import TextField from '@mui/material/TextField';

function App() {
  const [task,settask]=useState("");
  const [error,seterror]=useState(false);
  const [taskList,setTaskList]=useState([]);
  const [update,setUpdate]=useState(false);
  const [index,setIndex]=useState();
 const addTask=()=>{
   if(task.length){
   const previousTask =[...taskList];
   previousTask.push(task);
   setTaskList(previousTask);
  }else{
    seterror(true);
  }
 }
const setTaskName=(e)=>{
  settask(e.target.value);
  seterror (false);
}
const taskDelete =(index)=>{
  const previousTask =[...taskList];
   previousTask.splice(index,1);
   setTaskList(previousTask);
}
const setMiddlewar=(index)=>{
    setUpdate(true);
    setIndex(index);

}
const taskUpdate=()=>{
  const previousTask =[...taskList];
  previousTask.splice(index,1,task);
  setTaskList(previousTask);
  setUpdate(false);
}
  return (
  <>
    <Grid container justifyContent={'center'}>
    <Grid item md={8} container spacing={2}>
      <Grid item md={6}>
      <TextField
          onChange={(e)=> setTaskName(e)}
          fullWidth
          error={error}
          id="outlined-error"
          label="Error"
          helperText={error ? "Task name is reequired":""}
          value={task}
        />
        {update ?
        <Button onClick={taskUpdate} variant='contained'>Add Update</Button>  
        :<Button onClick={addTask} variant='contained'>Add Task</Button>
        }
      </Grid>
      <Grid item md={6}>
          {taskList.map((task,index,array)=>{
           return (
             <li>
               {task} 
               <button onClick={()=>taskDelete(index)}>Delete</button>
               <button onClick={()=>setMiddlewar(index)}>Update</button>
             </li>
           ); 
          })}
      </Grid>
    </Grid>
    </Grid>
  </>
  );
}

export default App;
