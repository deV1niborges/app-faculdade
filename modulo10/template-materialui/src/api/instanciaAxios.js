import axios from "axios";

const instanciaAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default instanciaAxios;
