import axios from "axios";

const baseUrl = "";

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 60,
  responseType: "json",
  headers: {
    Authorization: `Bearer ''`,
  },
});

instance.interceptors.request.use(
  (config) => config, // use tthe configuration passed to Request.
  (error) => Promise.reject(error)
);

const Request = async (options: any) => {
  try {
    const response = await instance(options); // Sending the request to the backend
    return response; // Sending the response the the component that instantiated HttpRequest
  } catch (error) {
    return Promise.reject(error);
  }
};

export default Request;
