import './style.css';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import Order from '../../../component/admin/order';
import Category from '../../../component/admin/category';
import User from '../../../component/admin/user';
import { useNavigate } from 'react-router';
import SecondaryHeader from '../../../component/header';
import SideNavbar from '../../../component/sidenavbar';
import UserInfo from '../../../component/userInfo';
import Product from '../../../component/admin/product';

export const AdminDashboard=()=>{
    const {userInfo}= useSelector((store)=>store) || {};
    const [componentState,setComponentState]=useState('userInfo');
    const token=userInfo?.token;
    const navigate=useNavigate();
   const setState=(value)=>{
       setComponentState(value);
   }
   
    return(
        <>
        {userInfo === undefined ?
        <>
        <h2>You are not allowed here</h2>
        <button onClick={()=>navigate('/')}>Go back To Home</button>
        </>
        :
        <>
        <div className='admin_body-dashboard__container'>
            <div className='admin_body-dashboard'>
                <SecondaryHeader user={userInfo?.user}/>
                <main className='admin__main'>
                   <div><SideNavbar setState={setState}/></div>
                    <div className='main-body'>
                    { 
                         componentState === 'category' ?
                            <div><Category token={token}/></div>
                        : componentState === 'order' ?
                            <div><Order token={token}/></div>
                        : componentState === 'user' ?
                            <div><User token={token}/></div>
                        : componentState === 'product' ?
                        <div><Product token={token}/></div>
                        : <div><UserInfo token={token}/></div>
                    }
                        
                    </div>
                </main>
        </div>
        </div>
            </>
        }
        </>
    );
}
