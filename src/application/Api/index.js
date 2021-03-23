import Axios from "axios";
const httpClient = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
// Add a request interceptor
httpClient.interceptors.request.use(
  (config) => {
    config.headers["content-type"] = "application/json ";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default httpClient;
