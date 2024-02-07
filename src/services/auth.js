import { API } from "../config/axios";
export const registerProcess = (userData) => {
  let data = API().post(`site/register`, userData);
  return data;
};
export const loginProcess = (userData) => {
  let data = API().post(`login`, userData);
  return data;
};

export const profileProcess = async () => {
  let { data } = await API().get(`profile`);
  return data;
};
