import axios from "axios";
import BaseUrl from "./utilis/API";

const useAxios = (token: string | null = null) => {
  axios.defaults.baseURL = BaseUrl;
  if (token !== null) {
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  }
  return axios;
};

export default useAxios;
