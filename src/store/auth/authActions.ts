import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginParams, RegistrationParams } from './types';
import AuthService from '../../services/AuthService';
import { AxiosError } from 'axios';
import { messageError, successMessage } from '@/utils/showMessage';
import { authConfig } from '../config';
interface ErrorResponse {
  message: string;
}
//todo: const for all mesages !
export const login = createAsyncThunk(
  authConfig.user.login,
  async ({ email, password }: LoginParams, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem(authConfig.token, response.data.accessToken);
      successMessage('login - Good');
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ErrorResponse>;
      messageError(axiosError.response?.data?.message || axiosError.message);
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

export const logout = createAsyncThunk(authConfig.user.logout, async (_, { rejectWithValue }) => {
  try {
    await AuthService.logout();
    localStorage.removeItem(authConfig.token);
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.response?.data);
  }
});

export const registration = createAsyncThunk(
  authConfig.user.registration,
  async ({ email, password, firstName, lastName }: RegistrationParams, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password, firstName, lastName);
      localStorage.setItem(authConfig.token, response.data.accessToken);
      successMessage('registration - Good / check your email');
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ErrorResponse>;
      messageError(axiosError.response?.data?.message || axiosError.message);
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const checkAuth = createAsyncThunk(authConfig.user.checkAuth, async (_, { rejectWithValue }) => {
  try {
    const response = await AuthService.checkAuth();
    localStorage.setItem(authConfig.token, response.data.accessToken);
    successMessage('checkAuth - Good');
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ErrorResponse>;
    messageError(axiosError.response?.data?.message || axiosError.message);
    // localStorage.removeItem(config.token);
    return rejectWithValue(axiosError.response?.data);
  }
});
