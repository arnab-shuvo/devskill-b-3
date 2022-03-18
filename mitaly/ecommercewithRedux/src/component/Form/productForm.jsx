import './ProductForm.css';
const ProductForm=({inputs,handleChange,handleSubmit})=>{
return(
    <>
    <div className='createProduct'>
    
        <form onSubmit={handleSubmit}>
       
        <label>Enter product title:
        <input 
            type="text" 
            name="title" 
            value={inputs.title || ""} 
            onChange={(e)=> handleChange(e)}
        />
        </label>
        <label>Enter price:
        <input 
          type="number" 
          name="price" 
          value={inputs.price || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Descripton:
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter image:
        <input 
          type="text" 
          name="image" 
          value={inputs.image || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter category:
        <input 
          type="category" 
          name="category" 
          value={inputs.category || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
        
        </form>
        
        </div>
    </>
);
}
export default ProductForm;