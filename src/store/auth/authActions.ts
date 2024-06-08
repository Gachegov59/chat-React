import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginParams, RegistrationParams } from './types';
import AuthService from '../../services/AuthService';
import { AxiosError } from 'axios';
import { errorMessage, message, messageError, successMessage } from '@/utils/showMessage';
interface ErrorResponse {
  message: string;
}

export const login = createAsyncThunk('auth/login', async ({ email, password }: LoginParams, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    successMessage(JSON.stringify(response.data));
    return response.data;
  } catch (error: unknown) {
    errorMessage(error as AxiosError);
    return rejectWithValue((error as AxiosError).response?.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await AuthService.logout();
    localStorage.removeItem('token');
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.response?.data);
  }
});

export const registration = createAsyncThunk(
  'auth/registration',
  async ({ email, password, firstName, lastName }: RegistrationParams, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password, firstName, lastName);
      localStorage.setItem('token', response.data.accessToken);
      successMessage(JSON.stringify(response.data));
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ErrorResponse>;
      messageError(axiosError.response?.data?.message || axiosError.message);
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
  try {
    const response = await AuthService.checkAuth();
    localStorage.setItem('token', response.data.accessToken);
    successMessage('checkAuth - Good');
    return response.data;
  } catch (error: unknown) {
    errorMessage(error as AxiosError);
    return rejectWithValue((error as AxiosError).response?.data);
  }
});
