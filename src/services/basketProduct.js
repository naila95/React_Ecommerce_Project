import { API } from "../config/axios";

export const postBasket = async (basketData) => {
  let data = await API.post("/site/basket", basketData);
  return data;
};

export const getBasket = async () => {
  let data = await API.get("/site/basket");
  return data;
};

export const deleteBasket = async (id) => {
  let data = await API.delete(`/site/basket/${id}`);
  return data;
};

export const updateBasket = async (id, basketData) => {
  let data = await API.put(`/site/basket/${id}`, basketData);
  return data;
};
