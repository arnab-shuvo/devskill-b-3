import DailyDeals from './../Home/DailyDeals/dailyDeals';
import './Product.css';
import React,{useState,useEffect} from 'react';
import {getProduct,deleteProduct} from './../../utills/api';
import {work,workB} from './../../component/middleware/middleware';
import { useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';

const Product=()=>{
 const {productId}=useSelector((store)=>store.setIdStore);
 
 const [productDetail,setProductDetail]=useState(null);
 const navigate=useNavigate();
 const toEditProduct=()=>{
   navigate(`/Edit-product/${productId}`);
 }
 const status=()=>{
    toEditProduct();
 }

 useEffect(() => {
  const chooseFunction=getProduct(productId);
  work(chooseFunction,setProductDetail);       
 }, [productId])

const on_delete=()=>{
    const chooseFunction= deleteProduct(productId);
    workB(chooseFunction);  
    }

    return(
        <>
        {productDetail=== null ? <h2>.....Loading</h2>
        :
        <>
       
       
        <div className='product'>
        <div className='productA'>
            <div className='productAChild'>
                <div className='imageA'>
                       
                        <img src={productDetail.image} className='imageyu'/>
                    </div> 
                    <div className='imageB'>
                    
                    <img src={productDetail.image} className='imagevu'/>
                    </div>
            </div>
            <div className='productB'>
                <h3>{productDetail.title}</h3>
                <h1>{productDetail.price}</h1>
                <h2>Category : {productDetail.category}</h2>
                <div>
                <h2>size</h2>
                <ul>
                    <li><button>S</button></li>
                    <li><button>M</button></li>
                    <li><button>L</button></li>
                    <li><button>XL</button></li>
                </ul>
                </div>
                <div>
                <h2>Color</h2>
                <ul>
                    <li><button>RED</button></li>
                    <li><button>RED</button></li>
                    <li><button>RED</button></li>
                   
                </ul>
                </div>
                <div>
                <h2>Quantity</h2>
                </div>
                <div className='addToBasket'>
                <button >ADD To Basket</button>
                <button>WishList</button>
                </div>
                <div>
                <button onClick={()=>status()}>Edit</button>
                <button onClick={on_delete}>Delete</button>
                </div>
                <div>
                    <div>
                        <h2>Free Shipping</h2>
                        <p>fffffffffff</p>
                    </div>
                    <div>
                        <h2>Retrurn Policy</h2>
                        <p>fdddddddddd</p>
                    </div>
                </div>
                <button>Description</button>
                <button>Size & Fit</button>
            </div>
        </div>
        <div>
            <h2>Customers also brought these</h2>
            <DailyDeals/>
        </div>
        </div>
        
       </>
        }
        </>
    );
}
export default Product;