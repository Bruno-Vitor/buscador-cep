import axios from "axios";

// 13469111/json/

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
});

export default api;