import axios from 'axios';
import { AuthResponse } from '../models/Auth';
export const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    //save for repeat requests
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, { withCredentials: true });
        localStorage.setItem('token', response.data.accessToken);

        return axiosInstance.request(originalRequest);
      } catch (error) {
        console.log('🚀 ~ not authorized:', error);
      }
    }

    throw error;
  }
);
export default axiosInstance;
