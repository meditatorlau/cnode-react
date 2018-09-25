import axios from 'axios';

const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 30000,
});

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
