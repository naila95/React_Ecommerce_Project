import { API } from "../config/axios";

export const postOrder = async (orderData) => {
  let data = await API.post("/site/orders", orderData);
  return data;
};

export const getOrder = async () => {
  let data = await API.get("/dashboard/orders");
  return data;
};
