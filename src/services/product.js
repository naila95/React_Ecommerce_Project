import { API } from "../config/axios";

export const getData = async () => {
  let data = await API.get("products");
  return data;
};
