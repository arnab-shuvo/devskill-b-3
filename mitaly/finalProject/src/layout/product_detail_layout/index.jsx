import {useNavigate,useParams} from 'react-router-dom';
import { getProduct } from '../../utills/productapi';
import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { addToCartAPI } from '../../utills/cartapi';
import './style.css';
import PrimaryFooter from '../../component/footer/primaryFooter';
const ProductDetails=()=>{
    const {userInfo}= useSelector((store)=>store) || {};
    const token=userInfo?.token;
    const navigate=useNavigate();
    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const [inputs, setInputs] = useState({});
    useEffect(() => {
       const work= async()=>{
            setProduct(await getProduct(id));
        }
        work();
    }, [id])
    const handleChange = (e) => {
        const _id=product._id;
        const value=e.target.value;
            setInputs(values => ({...values,
                                     id: _id,
                                    quantity: value, 
                                    }))
      }

    const addToCart=async(e)=>{
        e.preventDefault();
        if(userInfo === undefined || userInfo === null ){
            alert("logged In First");
            navigate('/login')
        }
        else{
            const cart=await addToCartAPI(inputs,token);
            console.log(cart);
            alert("Added to Cart");
            
        }
    }
    return(
        <>
        {product === null? 
        <h2>loading</h2>
        :
        <>
        <div>
            <header className='product_detail_header'>
            <button className='product_detail_header--button' onClick={()=>navigate('/')}>Home</button>
                {userInfo === null || userInfo === undefined? 
                <button className='product_detail_header--button login--button' onClick={()=>navigate('/login')}>Log IN</button>
                :
                 <>
                 <div className='product_detail_header--right'>
                 <h4 className='product_detail_header--h4 h4--inline'>{userInfo?.user}</h4>
                 <button className='product_detail_header--button' onClick={()=>navigate('/cart')}>Cart</button>
                 <button className="product_detail_header--button" onClick={()=>navigate('/AdminDashboard')}>Dashboard</button>
                 </div>
                 </>
            }
            </header>
            <div className='product_detail_maincontent'>
                <div className='product_detail_imgcontent'><img src={"http://127.0.0.1:8080"+product.image} alt=""/></div>
                <div className='product_detail_content'>
                    <h2>Product Name : {product.title}</h2>
                    <h2>Category Name : {product.category.name}</h2>
                    <h2>Description: {product.description}</h2>
                    <h2>price : {product.price}</h2>
                    <h2>Stock : {product.stock}</h2>
                    <div>
                        <form onSubmit={addToCart}>
                        <label>Enter Quantity:
                        <input 
                            className='input_field--productDetails'
                            type="text" 
                            name="quantity" 
                            value={inputs.quantity || ""} 
                            onChange={(e)=>handleChange(e)}
                        />
                        </label>
                        <button className='form-button' type='submit'>Add to Cart</button>
                        </form>
                    </div>
                </div>
            </div>
           
            <PrimaryFooter/>
        </div>
        </>
        
        }
        
        </>
    );
}
export default ProductDetails;