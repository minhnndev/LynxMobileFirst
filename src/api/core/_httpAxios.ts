import axios from "axios";

const _httpAxios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default _httpAxios;
