import useAxios from "../../../Axios";
import { ProductCreateDto, ProductReadDto } from "../../DTOs/Product";

export const CreateProductAsync = async (
  token: string,
  product: ProductCreateDto
) => {
  try {
    const axios = useAxios(token);
    return await axios.post("products", product);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetProductListAsync = async (): Promise<ProductReadDto[]> => {
  try {
    const axios = useAxios();
    const { data } = await axios.get("products");
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

// Promise<ProductReadDto[]>
