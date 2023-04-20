import axios from "axios";

const api = axios.create({
  baseURL: "https://eaiconecta-api.onrender.com/Funcionario",
});

export default api;
