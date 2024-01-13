import { API } from "../config/axios";

export const getStaff = async () => {
  let data = await API.get("/dashboard/users");
  return data;
};

export const postStaff = async (prodData) => {
  let data = await API.post("/dashboard/register", prodData);
  return data;
};

export const deleteStaff = async (id) => {
  let data = await API.delete(`/dashboard/users/${id}`);
  return data;
};
