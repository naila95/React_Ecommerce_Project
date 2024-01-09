import { API } from "../config/axios";

export const getProduct = async () => {
  let data = await API.get("/site/products");
  return data;
};

export const getSaleProduct = async () => {
  let data = await API.get("/site/products?isDeal=true");
  return data;
};
