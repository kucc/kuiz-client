import axios from "axios";

const endpoints = `http://localhost:3000`;

const instance = axios.create({
  baseURL: endpoints,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => Promise.reject(error)
);

export default instance;
