import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://express-h3l3.onrender.com/api/v1",
  withCredentials: true,
});

export default apiRequest;
