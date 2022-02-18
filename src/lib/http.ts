import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  timeout: 30000,
});

http.interceptors.response.use(
  (response) => {
    console.log("Test middleware: " + JSON.stringify(response.headers));
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
