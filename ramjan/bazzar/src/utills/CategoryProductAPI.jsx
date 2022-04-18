
export const productByCategoryAPI = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/products/category/${id}`);
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}
