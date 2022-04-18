import '../category/style.css';
import {useState,useEffect} from 'react';
import {getOrderLists} from '../../../utills/orderapi';
const Order=({token})=>{
    const [orderList,setOrderList]=useState([]);

    useEffect(() => {
        const work= async()=>{
            try {
                setOrderList(await getOrderLists(token));
            } catch (error) {
                return alert(error.message);
            }
        }
        work();
    }, [])
    console.log(orderList,'orderList');
    const editOrder=(orderId)=>{

    }
    const deleteOrder=(orderId)=>{

    }
return(
    <>
    <section>
    <div className='admin_category'>
        <h3>Order List....</h3>
        <button className='admin_category__button'>Create New Order</button>
        <div className='admin_category__Lists'>
       {orderList?.map((list,index)=>{
            return(
                <>
                <div key={index} className='admin_category__list'>
                    <h3>Order No: {index}</h3>
                    <h3>Order Date: {list?.date}</h3>
                    <h3>Order Id: {list?._id}</h3>
                    {list?.products?.map((product)=>{
                        return(
                            <>
                                <h3>Product Id: {product.productId._id}</h3>
                                <h3>Product Name: {product.productId.title}</h3>
                                <h3>Product Price: {product.productId.price}</h3>
                                <h3>Total Ordered Quantity: {product.quantity}</h3>
                            </>
                        );
                    })}
                     <div className='admin_category__list--button'>
                        <button 
                            onClick={()=>editOrder(list._id)}
                            >Edit Order
                            </button>
                        <button
                            onClick={()=>deleteOrder(list._id)}
                            >Delete Order
                            </button>  
                    </div>
                </div>
                </>
                );
        })}
       </div>
    </div>
    </section>
        </>
    );
}
export default Order;