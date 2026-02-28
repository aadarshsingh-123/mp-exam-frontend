import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/api';

const api = axios.create({
    baseURL: API_BASE,
    headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
    const tokens = JSON.parse(localStorage.getItem('tokens') || '{}');
    if (tokens.access) {
        config.headers.Authorization = `Bearer ${tokens.access}`;
    }
    return config;
});

// Auth
export const loginUser = (data) => api.post('/accounts/login/', data);
export const getProfile = () => api.get('/accounts/profile/');

// Admin - Student Management
export const getStudents = () => api.get('/accounts/admin/students/');
export const addStudent = (data) => api.post('/accounts/admin/students/add/', data);
export const deleteStudent = (id) => api.delete(`/accounts/admin/students/${id}/delete/`);

// Mock Test
export const submitTestResult = (data) => api.post('/mocktest/submit/', data);
export const getHistory = () => api.get('/mocktest/history/');
export const getLeaderboard = (type = 'full', name = '') =>
    api.get(`/mocktest/leaderboard/?type=${type}&name=${name}`);

export default api;
