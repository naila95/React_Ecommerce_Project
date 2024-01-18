import { API } from "../config/axios";

export const postOrder = async (orderData) => {
  let data = await API.post("/site/orders", orderData);
  return data;
};

export const getOrder = async (query) => {
  let data = await API.get(`/dashboard/orders${query && query}`);
  return data;
};

export const updateOrder = async (id, orderData) => {
  let data = await API.put(`/dashboard/orders/${id}`, orderData);
  return data;
};
