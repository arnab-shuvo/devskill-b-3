import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  const [error, setError] = useState(false)

  return (
    <div className="App">
      <h1> What's Your Plan? </h1>
      < Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} error={error} setError ={setError}/>
      < TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
    </div>
  );
}

export default App;
