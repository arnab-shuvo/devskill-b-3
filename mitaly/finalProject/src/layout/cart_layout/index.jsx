import {useState,useEffect} from 'react';
import { getCart } from '../../utills/cartapi';
import {useSelector} from 'react-redux';
import { checkoutCartAPI } from '../../utills/orderapi';
import { useNavigate } from 'react-router';
import './cart.css';
import SecondaryHeader from '../../component/header';
import SideNavbar from '../../component/sidenavbar';
const Cart=()=>{
    const [cart,setCart]=useState(null);
    const {userInfo}= useSelector((store)=>store) || {};
    const token=userInfo?.token;
    const navigate=useNavigate();
    useEffect(() => {
        const work=async()=>{
            setCart(await getCart(token));
        }
          work();  
    }, []);
   

const checkoutCart=async()=>{
    const checkout = await checkoutCartAPI(token);
    navigate('/AdminDashboard')
}

return(
    <>
    { cart === null || cart?.err?.name=== "JsonWebTokenError" || cart?.status === 'error' ? 
    <>
        <h2>hi i am cart</h2>
        {navigate('/')}
    </>

    : 
    <>
        <div className='cart'>
        <div className='cart_in'>
            <SecondaryHeader user={userInfo?.user}/>
            <div className='admin__main'>
                <div><SideNavbar/></div>
            <div>
            <h4>Cart Status : {cart?.status}</h4>
            <h4>Date : {cart?.date}</h4>
            {cart?.products.map((product,index)=>{
                return(
                    <>
                    <div className='cart_product_List'>
                        <h4>{index+1}) </h4>
                        <div className='cart_product_List_imgcontainer'>
                            <img className='cart_product_List_img' src={"http://127.0.0.1:8080"+product.productId.image} alt=""/>
                        </div>
                        <div className='cart_product_List_content'>
                            <h4>Tittle : {product?.productId?.title}</h4>
                            <h4>Price : {product?.productId?.price}</h4>
                            <h4>Quantity : {product?.quantity}</h4>
                        </div>
                    </div>
                    </>
                );
            })}
            <button onClick={()=>checkoutCart()}>Checkout Cart</button>
            </div>
            </div>
        </div>
        </div>
    </>
     }
    

    </>
);
}
export default Cart;