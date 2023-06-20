import api from "./api";

export const getEpisodes = async (id: string) => api.get(`admin/episodes/${id}`);
export const getUserEpisodes = async (id: string) => api.get(`courses/${id}`);

export const addEpisode = async (course_id: string, title: string, body: string, videoUrl: string, number: string) =>
 api.post(`admin/episodes`, { course_id, title, body, videoUrl, number });

export const deleteEpisode = async (id: string) => api.delete(`admin/episodes/${id}`);
export const editEpisode = async (id: string, title: string) => api.put(`admin/episodes/${id}`, { title });
