import React,{useState} from 'react';
import './slider.css';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
const Slider =()=>{
    const [images,setImage]=useState([
    {
        id:1,
        img:'https://previews.123rf.com/images/irinaqiwi/irinaqiwi1708/irinaqiwi170800268/84170210-christmas-gift-voucher-coupon-discount-gift-certificate-template-for-merry-christmas-vector-flat-ill.jpg'        
    },
    {
        id:2,
        img:'https://thumbs.dreamstime.com/z/gift-card-voucher-certificate-coupon-vector-design-template-discount-banner-christmas-new-year-holidays-sale-layout-160863343.jpg'
    },
    {
        id:3,
        img:'https://i.pinimg.com/originals/b5/57/45/b55745edfe2ada9989355176aef6476e.jpg'
    }
])
const [current,setCurrent]=useState(0);
const length=images.length;
const nextSlide=()=>{
    setCurrent(current === length-1? 0:current+1)
}
const prevSlide=()=>{
    setCurrent(current === 0? length-1 :current-1)
}
console.log(current);
if(!Array.isArray(images)|| images.length<=0){
    return null;
}
return(
    <section className='slider'>
    <FaArrowAltCircleLeft className='left-arrow'onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
       {images.map((image,index)=>{
           return(
              
            <div className={index === current ? 'slide active' : 'slide'} key ={index}>
               {index === current &&(
               <img src={image.img} alt='sale' className='image'/>
               )} 
               </div> 
               
           )
       })}
    </section>
);
}
export default Slider;