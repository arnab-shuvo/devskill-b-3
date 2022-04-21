import { useNavigate } from 'react-router';
import './style.css';
import cv from '../../assets/images/14.png';
import cv1 from '../../assets/images/8.png';
import cv2 from '../../assets/images/10.png';
import cv3 from '../../assets/images/5.png';
import cv4 from '../../assets/images/5.png';
import cv5 from '../../assets/images/13.png';
import cv6 from '../../assets/images/9.png';
import cv7 from '../../assets/images/1.png';
import {useDispatch} from 'react-redux';
const SideNavbar=({setState})=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const logout=()=>{
        dispatch({
            type: "deleteUserInfo",
        })
        alert("Logout Succesfully ");
        navigate('/');
    }
    return(
        <>
         <div className='admin_side-nav-bar'>
            <div className='icon'>
                <ul>
                    <li><button 
                            className='admin_dashboard--button' 
                            onClick={()=>navigate('/')}>
                            <img src={cv}/>
                        </button>
                    </li>
                    <li><button onClick={()=>navigate('/AdminDashboard')} className='admin_dashboard--button' ><img src={cv1}/></button></li>
                    <li><button onClick={()=>setState('userInfo')} className='admin_dashboard--button' ><img src={cv2}/></button></li>
                    <li><button onClick={()=>setState('category')} className='admin_dashboard--button' ><img src={cv3}/></button></li>
                    <li><button onClick={()=>setState('order')} className='admin_dashboard--button' ><img src={cv4}/></button></li>
                    <li><button onClick={()=>setState('user')} className='admin_dashboard--button' ><img src={cv5}/></button></li>
                    <li><button onClick={()=>setState('product')} className='admin_dashboard--button' ><img src={cv5}/></button></li>
                </ul>
            </div>
            <div className='login-icon'>
                <ul>
                    <li><img src={cv6}/></li>
                    <li>
                        <button 
                        className='admin_dashboard--button' 
                        onClick={()=>logout()}>
                        <img src={cv7} className='logout-icon'
                        />
                        </button>
                    </li> 
                </ul>
            </div>
        </div>
        </>
    );
}
export default SideNavbar;