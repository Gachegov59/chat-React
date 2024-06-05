import axiosInstance from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import Endpoints from '../http/constant';

const { USERS_BASE_ROUTE, LOGIN, REGISTRATION, LOGOUT } = Endpoints.USER;

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return axiosInstance.post<AuthResponse>(USERS_BASE_ROUTE + LOGIN, { email, password });
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return axiosInstance.post<AuthResponse>(USERS_BASE_ROUTE + REGISTRATION, { email, password });
  }
  static async logout(): Promise<void> {
    return axiosInstance.post(USERS_BASE_ROUTE + LOGOUT);
  }
}
