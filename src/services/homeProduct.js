import { API } from "../config/axios";

// export const getProduct = async () => {
//   let data = await API.get("/site/products");
//   return data;
// };

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
