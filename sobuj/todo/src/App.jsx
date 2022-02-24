import './App.css';
// import './css/style.css';
import Preloader from  './Components/Preloader';
import { useEffect, useState } from 'react';
import Home from './Components/Home';

function App() {
    const [showLoader, setShowLoader] = useState(true)
    const headerPass = "This is a header"
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
