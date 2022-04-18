import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';
import './styles.css';

const FrontDashboard = () => {
  return (

    <div className='wrapper'>
         <h2>This is Dashboard, which is showing after login </h2>
 
    </div>
  )
}

export default FrontLayout(FrontDashboard)

