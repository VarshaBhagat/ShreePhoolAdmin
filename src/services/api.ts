import axios from "axios";

const API = axios.create({
  baseURL: "http://187.127.165.63:5000/api/",
});

export default API;