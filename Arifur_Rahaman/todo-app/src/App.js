import './App.css';
import Stack from '@mui/material/Stack';
import { TodoPaper } from './StyledComponents/StyledComponents';
import { useState } from 'react';
import RemainingTodo from './Components/RemainingTodo';
import CompletedTodo from './Components/CompletedTodo';
import TodoForm from './Components/TodoForm';
import uuid from 'react-uuid'

function App() {
  const [todos, setTodos] = useState([
    {id: '1', text: "Sample todo one", complete: false},
    {id: '2', text: "Sample todo two", complete: true}
  ])

  const [todoEdit, setTodoEdit]= useState({
    edit: false,
    todo: {}
})

  const addTodo=(newTodo)=>{
    newTodo.id = uuid()
    newTodo.complete=false
    setTodos([newTodo, ...todos])
}

const deleteTodo = (newDeletedTodo)=>{
  setTodos(todos.filter(todo=>todo.id!==newDeletedTodo.id));

}

const editTodo = (newEditTodo) =>{
  setTodoEdit({
      edit: true,
      todo: {...newEditTodo}
  })
}

const updateTodo =(newUpdateTodo)=>{
  setTodos(todos.map(todo=>todo.id === todoEdit.todo.id? {...todo, ...newUpdateTodo}: todo));
}

const completeTodo = (newCompletedtodo)=>{
  newCompletedtodo.complete = true;
  setTodos(todos.map(todo=>todo.id===newCompletedtodo.id? {...todo, ...newCompletedtodo}: todo))
}

  return (
    <Stack sx={{ height: '100vh' }} alignItems='center' justifyContent='center'>
      <TodoPaper elevation={12} sx={{p: '10px 0'}}>
        <TodoForm addTodo={addTodo} todoEdit={todoEdit} updateTodo={updateTodo}/>
        <RemainingTodo todos={todos} completeTodo={completeTodo} editTodo={editTodo} deleteTodo={deleteTodo}></RemainingTodo>
        <CompletedTodo todos={todos}  deleteTodo={deleteTodo}></CompletedTodo>
      </TodoPaper>
    </Stack>
  );
}

export default App;
