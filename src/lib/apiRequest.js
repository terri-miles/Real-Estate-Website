import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://express-realestate.onrender.com/api/v1",
  withCredentials: true,
});

export default apiRequest;
