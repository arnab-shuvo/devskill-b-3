import axios from "axios"
import IProduct from "../IProduct";

export const GetAllProducts = async () => {
    try {
        const {data} = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
        return data
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export const GetProductById = async (productId : number) => {
    try {
        const {data} = await axios.get<IProduct>(`https://fakestoreapi.com/products/${productId}`);
        return data;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}