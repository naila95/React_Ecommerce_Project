import axios from "axios";

export const API = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_API_KEY}`,
  headers: {
    "Content-type": "application/json",
    Authorization: `${"Bearer " + localStorage.getItem("token")}`,
  },
});
