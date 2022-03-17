import axios from "axios";
import { ProductType } from "../utilities/ProductType";

const getAllProducts = "https://fakestoreapi.com/products";
const getProductById = "https://fakestoreapi.com/products/";
const deleteProduct = "https://fakestoreapi.com/products/";
const updateProduct = "https://fakestoreapi.com/products/";
const addNewProduct = "https://fakestoreapi.com/products";

export const GetProductsAsync = async (): Promise<ProductType[]> => {
  try {
    const { data } = await axios.get<ProductType[]>(getAllProducts);
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetProductAsync = async (
  productId: string | undefined
): Promise<ProductType> => {
  try {
    const { data } = await axios.get<ProductType>(
      `${getProductById}${productId}`
    );
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

export const UpdateProductAsync = async (product: ProductType | null) => {
  try {
    await axios.put(`${updateProduct}${product?.id}`, product);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const CreateProductAsync = async (product: ProductType | null) => {
  try {
    await axios.post(addNewProduct, product);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
