import axios from 'axios';
import { DOMAIN_CYBERBUG } from "../util/constants/settingSyctem";

const axiosInstance = axios.create({
    baseURL: DOMAIN_CYBERBUG,
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const cyberbugsService = {
    signinCyberBugs: (userLogin) => {
        return axios.post(`${DOMAIN_CYBERBUG}/Users/signin`, userLogin);
    },

    getAllProjectCategory: () => {
        return axiosInstance.get('/ProjectCategory');
    },

    createProject: (data) => {
        return axiosInstance.post('/Project/createProject', data);
    }
};
