import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
const Header =()=>{
    const navigate=useNavigate();
    const navigation=(value)=>{
        switch(value){
            case "toHome":
            navigate('/');
            break;
            case 'toCreateProduct' :
            navigate('/Create-product');
            break;
            case 'toEditProduct':
            navigate('/Edit-product');
            break;
            case 'toProduct':
            navigate('/Product');
            break;
            case 'toProductList':
            navigate('/Products');
            break;
            default :
            navigate('404');
        
            }
        }
    return(
        <>
        <div className="topnav">
        <li className="active" onClick={()=>navigation('toHome')}>Home</li>
        <li onClick={()=>navigation('toAbout')}>About</li>
        <li onClick={()=>navigation('toContact')}>Contact</li>
        <li onClick={()=>navigation('toCreateProduct')}>Create Product</li>
        <li onClick={()=>navigation('toProductList')}>Products</li>
        <input type="text" placeholder="Search.."/>
        </div>
        </>
    );
}
export default Header;