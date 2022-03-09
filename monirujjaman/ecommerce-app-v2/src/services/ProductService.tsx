import axios from "axios";
import IProduct from "../utilities/IProduct";

const getAllProducts = "https://fakestoreapi.com/products";
const getProductById = "https://fakestoreapi.com/products/";
const deleteProduct = "https://fakestoreapi.com/products/";
const updateProduct = "https://fakestoreapi.com/products/";
const addNewProduct = "https://fakestoreapi.com/products";

export const GetProductsAsync = async (): Promise<IProduct[]> => {
  try {
    const { data } = await axios.get<IProduct[]>(getAllProducts);
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetProductAsync = async (
  productId: string | undefined
): Promise<IProduct> => {
  try {
    const { data } = await axios.get<IProduct>(`${getProductById}${productId}`);
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const DeleteProductAsync = async (productId: string | undefined) => {
  try {
    await axios.delete(`${deleteProduct}${productId}`);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};


export const UpdateProduct = async (product: IProduct) => {
  try {
    await axios.put(`${updateProduct}${product.id}`, product);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export const CreateProduct = async (product: IProduct) => {
  try {
    await axios.post(addNewProduct, product);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}