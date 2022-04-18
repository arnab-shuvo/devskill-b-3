import './Home.css';
import {getProducts} from '../../utills/productapi';
import React,{useEffect,useState} from 'react';
import brand_img1 from '../../assets/images/brand_img_1.png';
import brand_img2 from '../../assets/images/brand_img_2.png';
import brand_img3 from '../../assets/images/brand_img_3.png';
import brand_img4 from '../../assets/images/brand_img_4.png';
import {useNavigate} from 'react-router-dom';
import PrimaryFooter from '../../component/footer/primaryFooter';
const Home=()=>{
const navigate=useNavigate();
const [productList,setProductList]=useState([]);
useEffect(() => {
    const work= async()=>{
        try {
            setProductList(await getProducts());
            } catch (error) {
            return alert(error.message);
            }
        };
        work();
}, [])
const productDetails=(productId)=>{
    navigate(`/productDetails/${productId}`);
}
console.log(productList);
    return(
        <>

        <main>
        <section id='banner'>
        <div className='banner__container'>
        <div className='banner_img'></div>
        <header className='header'>
            <div className='logo'>
           <a href='filtro'>Filtro</a>
            </div>
            <div>
          
               <a href='Home'>Home</a>
               <a href='explore-us'>Explore US</a>
                <a href='Brands'>Brands</a>
               <a href='contact-us'>Contact Us</a>
          
            </div>
            <div className='header__button'>
            
                <button className='button' onClick={()=>navigate('/login')}>Sign Up/Login</button>
                <button className='button' >Get the app</button>
            
            </div>
        </header>
        <div className='banner__content'>  
            <h1>Power up with coffee</h1>
            <h3>Start your wxciting duty with coffee</h3>
            <button className='banner__content-button'>Explore US</button>
        </div>
        </div>
    </section>
    <section id='product-lists'>
        <h3>Explore the Coffe world</h3>
        <div className='product-lists'>
            {productList.map((product)=>{
                return( 
                    <>
                    <div className='product-list'>
                        <div className='product-list__content'>
                            <img src={"http://127.0.0.1:8080"+product.image} alt=""/>
                            <h4>{product.title}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Massa, fermentum id id vitae, integer fermentum tellus.
                            In vitae id nisl quis ornare diam commodo in vel dolor.</p>
                            <h4>Stock : {product.stock} pieces</h4>
                            <h4>Genre : {product.category.name}</h4>
                        </div> 
                        <div className='product-list__button'>
                            <h4>${product.price}</h4>
                            <button className='button' onClick={()=>productDetails(product._id)}>View Details</button>
                        </div>
                    </div>
                    </>
                    );
            })}
        </div>
            </section>
        <section id='brand-lists'>
                <h3>Brands We Work With</h3>
               <div className='brand-lists'>
                    <div className='brand-list'><img src={brand_img4} alt=""/></div>
                    <div className='brand-list'><img src={brand_img1} alt=""/></div>
                    <div className='brand-list'><img src={brand_img3} alt=""/></div>
                    <div className='brand-list'><img src={brand_img2} alt=""/></div>
                    </div>
        </section>
       <PrimaryFooter/>
        </main>
        </>
    );
}
export default Home;