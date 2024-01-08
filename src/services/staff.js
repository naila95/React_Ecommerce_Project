import { API } from "../config/axios";

export const getStaff = async () => {
  let data = await API.get("/dashboard/users");
  return data;
};

export const postStaff = async (prodData) => {
  let data = await API.post("/dashboard/register", prodData);
  return data;
};
