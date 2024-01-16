import { API } from "../config/axios";

export const getProductForSite = async (query) => {
  let data = await API.get(`/site/products${query && query}`);
  return data;
};

export const getSaleProduct = async () => {
  let data = await API.get("/site/products?isDeal=true");
  return data;
};

export const getSingleProduct = async (id) => {
  let data = await API.get(`/site/products/${id}`);
  return data;
};

export const getIsPublishedProduct = async () => {
  let data = await API.get("/site/products?isPublish=true");
  return data;
};
