import api from "./api";

export const WhoAmI = async () => api.get(`user`);
export const Login = async (email: string, password: string) => api.post(`login`, { email, password });
export const Register = async (email: string, name: string, password: string) =>
 api.post(`register`, { email, name, password });
