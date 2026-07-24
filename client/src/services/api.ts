import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const api = axios.create({ baseURL: API_BASE });

export const getProjects = () => api.get('/projects');
export const getProject = (id: string) => api.get(`/projects/${id}`);
export const createProject = (data: object) => api.post('/projects', data);
export const updateProject = (id: string, data: object) => api.put(`/projects/${id}`, data);
export const deleteProject = (id: string) => api.delete(`/projects/${id}`);