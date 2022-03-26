export const productsListApi = async () => {
  try {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json();
      return data
  } catch (error) {
      console.log(error);        
  }
}

export const productListApi = async (id) => {
  try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json();
      return data
  } catch (error) {
      console.log(error);        
  }
}