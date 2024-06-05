import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginParams, RegistrationParams } from './types';
import AuthService from '../../services/AuthService';
import axios, { AxiosError } from 'axios';
import { API_URL } from '@/http';
import { AuthResponse } from '@/models/response/AuthResponse';
import toast from 'react-hot-toast';

const notify = (data: string) => toast(data);

export const login = createAsyncThunk('auth/login', async ({ email, password }: LoginParams, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    notify(JSON.stringify(response.data));
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    notify(JSON.stringify(axiosError.response?.data));
    return rejectWithValue(axiosError.response?.data);
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
  async ({ email, password }: RegistrationParams, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.accessToken);
      notify(JSON.stringify(response.data));
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      notify(JSON.stringify(axiosError.response?.data));
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    // localStorage.removeItem('token'); ?
    localStorage.removeItem('token'); 
    return rejectWithValue(axiosError.response?.data);
  } 
});
