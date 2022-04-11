import useAxios from "../../../Axios";
import { CategoryCreateDto, CategoryReadDto } from "../../DTOs/Category";

export const CreateProductCategory = async (
  token: string,
  category: CategoryCreateDto
) => {
  try {
    const axios = useAxios(token);
    return await axios.post("category", category);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetCategoryList = async (): Promise<CategoryReadDto[]> => {
  try {
    const axios = useAxios();
    const { data } = await axios.get("category");
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
