import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Loader from './components/Loader';




function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      loaderConrol()
    }, 1000);
  })

 
  const loaderConrol = () => {
        setLoader(false)
  }

  const styles = {
    background: {
      backgroundColor: 'red',

    }
  }
  
  return (
    <div style={styles.background}>
      {
        loader ? <Loader/>: <Home/>
      }
      
    </div>
  );
}

export default App;
