import { API } from "../config/axios";

export const postBasket = async (basketData) => {
  let data = await API.post("/site/basket", basketData);
  return data;
};

export const getBasket = async () => {
  let data = await API.get("/site/basket");
  return data;
};
