import { API } from "../config/axios";

export const postBrand = async (userData) => {
  let data = await API.post("/dashboard/brands", userData);
  return data;
};

export const getBrand = async () => {
  let data = await API.get("/dashboard/brands");
  return data;
};

export const updateBrand = async (id, userData) => {
  let data = await API.put(`/dashboard/brands/${id}`, userData);
  return data;
};

export const deleteBrand = async (id) => {
  let data = await API.delete(`/dashboard/brands/${id}`);
  return data;
};
