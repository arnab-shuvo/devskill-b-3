import { FormControl,InputLabel, Select, MenuItem } from "@material-ui/core";
import {getCategoryList} from '../../../utills/categoryapi';
import {useState,useEffect} from 'react';
const ProductForm=({handleChange,onUpdateSubmit,editProfile,inputs,getCategoryId})=>{

    const [categoryLists,setCategoryLists]=useState();
    const [category, setCategory] = useState("");

    useEffect(() => {
        const work= async()=>{
        try {
            setCategoryLists(await getCategoryList()); 
        } catch (error) {
            return alert(error.message);
        }
    }
    work();
    }, [])
    console.log(categoryLists,"category");
    return(
        <>
        {categoryLists === null ?
        <h2>Loading.........</h2>
        :
        
        <form onSubmit={onUpdateSubmit} className='form-container'>
            <h1>Product</h1>

            <label for="title"><b>Title</b></label>
            <input type="text" 
             placeholder="Enter Title" 
             name="title" 
             value={inputs.title || ""} 
             onChange={handleChange}/>

            <label for="price"><b>Price</b></label>
            <input type="text" 
             placeholder="Enter Price" 
             name="price" 
             value={inputs.price || ""} 
             onChange={handleChange}/>

            <label for="description"><b>Description</b></label>
            <input type="text" 
             placeholder="Enter Description" 
             name="description" 
             value={inputs.description || ""} 
             onChange={handleChange}/>

            <label for="image"><b>Image</b></label>
            <input type="text" 
             placeholder="Enter Image" 
             name="image" 
             value={inputs.image || ""} 
             onChange={handleChange}/>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={(e) => {
                    setCategory(e.target.value);
                    getCategoryId(e.target.value);
                    }}
                >
                {categoryLists?.map((category) => (
                    <MenuItem value={category._id}>{category._id}</MenuItem>
                ))}
               </Select>
               </FormControl>
            <label for="stock"><b>Stock</b></label>
            <input type="text" 
             placeholder="Enter Stock" 
             name="stock" 
             value={inputs.stock || ""} 
             onChange={handleChange}/>

            <button type='submit'>Edit</button>
            <button type='button' onClick={()=>editProfile('none')}>close Profile</button>
            </form>
        }
        </>
    );
}
export default ProductForm;