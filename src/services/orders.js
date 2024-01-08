import { API } from "../config/axios";

export const postProduct = async (prodData) => {
  let data = await API.post("/site/orders", prodData);
  return data;
};
