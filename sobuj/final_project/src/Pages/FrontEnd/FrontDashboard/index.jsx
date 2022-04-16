import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import './styles.css';

const FrontDashboard = () => {
  return (

    <div className='wrapper'>
      <Navbar />
         <h2>This is Dashboard, which is showing after login </h2>
 
    </div>
  )
}

export default FrontDashboard;
