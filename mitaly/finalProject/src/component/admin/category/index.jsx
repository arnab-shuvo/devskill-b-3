import './style.css';
import {getCategoryList, deleteCategoryAPI, createCategory} from '../../../utills/categoryapi';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Category=({token})=>{
    const [categoryLists,setCategoryLists]=useState([]);
    const [state,setState]=useState(false);
    const navigate=useNavigate();
    useEffect(() => {
        const work= async()=>{
            try {
                setCategoryLists(await getCategoryList()); 
            } catch (error) {
                return alert(error.message);
            }
        }
        work();
    }, [state])

    const createCategory=()=>{
        navigate("/categoryForm")
    }
    const editCategory=(categoryID)=>{

    }
    const deleteCategory= async(categoryID)=>{
        try {
            await deleteCategoryAPI(categoryID,token);
            alert("Category Deleted Succesfully");
            setState(true);
        } catch (error) {
            return alert(error.message);
        }
    }
    return(
        <>        
        <section id='content'>
            <div className='admin_category'>
                <h3>Categories..</h3>
                <button onClick={()=>createCategory()}className='admin_category__button'>Create New Category</button>
                <div className='admin_category__Lists'>
                    {categoryLists.map((category,index)=>{
                        return(
                            <>
                            <div key={index} className='admin_category__list'>
                                <h3>{index}) {category.name}</h3>
                                <p>{category.description}</p>
                                <div className='admin_category__list--button'>
                                    <button 
                                     onClick={()=>editCategory(category._id)}
                                     >Edit Category
                                     </button>
                                    <button
                                     onClick={()=>deleteCategory(category._id)}
                                     >Delete Category
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
export default Category;