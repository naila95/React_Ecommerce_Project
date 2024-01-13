import { API } from "../config/axios";

export const getProduct = async (query) => {
  let data = await API.get(`/dashboard/products${query && query}`);
  return data;
};

export const getProductForDashboardChart = async () => {
  let data = await API.get("/dashboard/products");
  return data;
};

export const postProduct = async (prodData) => {
  let data = await API.post("/dashboard/products", prodData);
  return data;
};

export const deleteProduct = async (id) => {
  let data = await API.delete(`/dashboard/products/${id}`);
  return data;
};

export const updateProduct = async (id, userData) => {
  let data = await API.put(`/dashboard/products/${id}`, userData);
  return data;
};
