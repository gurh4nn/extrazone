import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.extrazone.com/",
  timeout: 100000,
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["X-Country-Id"] = "TR";
axiosInstance.defaults.headers.common["X-Language-Id"] = "TR";


export default axiosInstance;
