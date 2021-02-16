import axios from "axios";
import { toast } from "react-toastify";
import store from "../redux/store";
import * as AuthConstants from "../redux/constants/authConstants/auth.constants";

const token = localStorage.getItem("token");

const AxiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Authorization: token ? `Bearer ${token}` : "",
  },
  withCredentials: false,
  baseURL: "http://localhost:5000/api/v1",
});

AxiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

AxiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response, "error from axios LINE_NO_30");
    if (error.response) {
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      } else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("need to define the error");
      }
    }
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      console.log("logging error", error);
      console.log("An unexpected error occured!");
    }
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      store.dispatch({ type: AuthConstants.LOGIN_SUCCESS });
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
