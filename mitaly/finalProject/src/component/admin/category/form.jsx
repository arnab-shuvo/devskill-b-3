import {useState,useEffect} from 'react';
import {createCategory} from '../../../utills/categoryapi';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
const CategoryForm=()=>{
    const {userInfo}= useSelector((store)=>store);
    const[token,setToken]=useState(userInfo.token);
    const [category,setCategory]=useState({});
    const [inputs, setInputs] = useState({});
    const navigate=useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => {
            return{
                ...values,
                 [name]: value
                };
            }   
        );
      }

    const onUpdateSubmit= async(e)=>{ 
        e.preventDefault();  
            const category= await createCategory(inputs,token)
            console.log(category,"categorydata");
            alert("Category Created Successfully")
            navigate('/AdminDashboard')
       
    };
   
    return(
        <>
        <div>
            <form onSubmit={onUpdateSubmit}> 
            <label ><b>Category name</b></label>
            <input
            type="text" 
            autoComplete="name" 
            name="name"
            value={inputs.name || ""} 
            onChange={handleChange}
            />
            <label ><b>description</b></label>
            <input
            type="text" 
            autoComplete="description" 
            name="description"
            value={inputs.description || ""} 
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
            </form>
        </div> 
        </>
    );
}
export default CategoryForm;