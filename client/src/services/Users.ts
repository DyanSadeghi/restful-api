import api from "./api";

export const getUsers = async () => api.get(`admin/users`);
