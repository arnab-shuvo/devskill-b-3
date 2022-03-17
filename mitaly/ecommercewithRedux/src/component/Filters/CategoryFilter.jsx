import React,{useState,useEffect} from 'react';
import { work } from '../middleware/middleware';
import { getAllCategories } from '../../utills/api';

const CategoryFilter=({onSort})=>{

    const [categories,setCategories]=useState([]);
    const [category,setCategory]=useState('');
    useEffect(()=>{
        const chooseFunction=getAllCategories();
        work(chooseFunction,setCategories);
    },[]);
       
    const handleChange = (e) => {
       setCategory(e.target.value);
       onSort("Category",e.target.value);
    }

        
    

    return(
        <>
        <div>
        <form>
      <select value={category} onChange={handleChange}>
      {categories.map((value)=>{
          return(
            <option value={value}>{value}</option>
          )
      })}
        
      </select>
    </form>
   </div>
    </>
    );
}
export default CategoryFilter;