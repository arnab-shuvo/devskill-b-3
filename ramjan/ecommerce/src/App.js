import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Loader from './components/Loader';

function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  },[])
  return (
    <Container>
       {loader? <Loader/> : <Home/>}
    </Container>
  );
}

export default App;
