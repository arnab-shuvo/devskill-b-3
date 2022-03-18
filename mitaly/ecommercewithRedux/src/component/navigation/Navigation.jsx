import { useNavigate} from "react-router-dom";

const Navigation =()=>{
 const navigate=useNavigate();
 const navigation=(value)=>{
    switch(value){
        case "toHome":
        navigate('/');
        case 'toCreateProduct' :
        navigate('/Create-product');
        case 'toEditProduct':
        navigate('/Edit-product');
        case 'toProduct':
        navigate('/Product');
        case 'toProductList':
        navigate('/Products');
        default :
        navigate('404');
        }
    }
}
export default Navigation;