import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  timeout: 30000,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const method = error.response?.config.method;
    const editMethods = ["POST", "post", "PATCH", "patch"];
    if (editMethods.includes(method ?? "")) {
      toast.error("Nastal problém pri nahrávaní záznamu!");
    }
    return Promise.reject(error);
  },
);

export default http;
