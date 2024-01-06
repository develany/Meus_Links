import axios from 'axios';

const API = axios.create({
    baseURL: 'https://smoggy-crab-sunglasses.cyclic.app',
});

API.interceptors.response.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => {

        return Promise.reject(error);
    }
);


export { API };
