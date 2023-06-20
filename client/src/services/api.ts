import axios, { AxiosResponse } from "axios";
const Token = localStorage.getItem("accessToken");

const api = axios.create({
 baseURL: "http://localhost:5000/api/v1/",
 headers: {
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": "true",
  "x-access-token": Token,
 },
 withCredentials: true,
});

api.interceptors.response.use(
 (response: AxiosResponse) => {
  response.data.response = response;
  if (Math.floor(response.status / 100) !== 2) {
   console.log(response.data.message);
  }
  return response.data;
 },
 async (error: any) => {
  throw error;
 }
);

export default api;
