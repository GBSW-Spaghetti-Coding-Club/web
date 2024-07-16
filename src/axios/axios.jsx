import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://52.79.117.216:3030",
  withCredentials: true,
});

export default axiosInstance;
