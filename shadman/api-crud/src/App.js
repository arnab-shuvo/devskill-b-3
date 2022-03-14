import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Dropdown from './components/Dropdown/Dropdown';

const App = () => {

  return (
    <div className='app'> 
      <h1>Products</h1>
      < Home />
    </div>

  )
}

export default App;
