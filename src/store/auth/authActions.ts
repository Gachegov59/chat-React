import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginParams, RegistrationParams } from './types';
import AuthService from '../../services/AuthService';
import axios, { AxiosError } from 'axios';
import { AuthResponse } from '../../models/response/AuthResponse';
import { API_URL } from '../../http';

export const login = createAsyncThunk('auth/login', async ({ email, password }: LoginParams, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
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
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

//todoL перенести в AuthService ?
export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, {
      withCredentials: true,
    });
    console.log('🚀 ~ response:--', response);
    localStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.response?.data);
  } finally {
    // this.setLoading(false);
    // state.isLoading = false;
  }
});
