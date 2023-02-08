import axios from 'axios';

const BASE_URL = 'https://openmarket.weniv.co.kr' as const;

export const axiosApi = axios.create({
    baseURL: BASE_URL,
});

axiosApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token && config.headers) {
        config.headers['Authorization'] = `JWT ${token}`;
    }
    return config;
});
