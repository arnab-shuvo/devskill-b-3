import './App.css';
import './css/style.css';
import Preloader from  './Components/Preloader';
import { useEffect, useState } from 'react';
import Home from './Pages/Home/index';

function App() {
    const [showLoader, setShowLoader] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
          loaderChange(false)
        }, 1000)
    }, []);

    const loaderChange = (show = false) =>{
      setShowLoader (show)
    }

  return (
    <>   
      {showLoader===true? 
      (<Preloader  />)  
      :
      (<Home />)
      }
      
      
      
    </>
  );
}

export default App;
