import api from "./api";

export const addCourse = async (title: string, user: any, price: string, description: string, image: any) =>
 api.post(`admin/courses`, { title, user, price, body: description, image });

export const getCourses = async () => api.get(`admin/courses`);
export const getUserCourses = async () => api.get(`/courses`);
export const deleteCourse = async (id: string) => api.delete(`admin/courses/${id}`);
export const editCourse = async (id: string, title: string) => api.put(`admin/courses/${id}`, { title });
