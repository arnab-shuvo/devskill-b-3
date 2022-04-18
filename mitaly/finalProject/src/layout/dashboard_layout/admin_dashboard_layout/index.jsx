import './style.css';
import {useSelector} from 'react-redux';
import Order from '../../../component/admin/order';
import Category from '../../../component/admin/category';
import User from '../../../component/admin/user';
import { useNavigate } from 'react-router';
import SecondaryHeader from '../../../component/header';
import SideNavbar from '../../../component/sidenavbar';

export const AdminDashboard=()=>{
    const {userInfo}= useSelector((store)=>store) || {};
    const token=userInfo?.token;
    const navigate=useNavigate();
   
   
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
                   <div><SideNavbar/></div>
                    <div className='main-body'>
                        <div><Category token={token}/></div>
                        <div><Order token={token}/></div>
                        <div><User token={token}/></div>
                    </div>
                </main>
        </div>
        </div>
            </>
        }
        </>
    );
}
