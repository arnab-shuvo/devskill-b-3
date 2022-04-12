import useAxios from "../../../Axios";
import {
  UserBasicInfo,
  UserInfo,
  UserSigninDto,
  UserSignupDto,
} from "../../DTOs/User";

export const SignInUserAsync = async (
  userSigninInfo: UserSigninDto
): Promise<UserInfo | undefined> => {
  try {
    const axios = useAxios();
    var {
      data: { userInfo: user },
    } = await axios.post(`signin`, userSigninInfo);
    return user;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const SingnupUserAsync = async (userInfo: UserSignupDto) => {
  try {
    const axios = useAxios();
    return await axios.post("signup", userInfo);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetMyInfoAsync = async (token: string): Promise<UserBasicInfo> => {
  try {
    const axios = useAxios(token);
    var { data } = await axios.get("my-detail");
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
