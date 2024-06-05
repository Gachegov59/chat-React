import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '@/models/response/AuthResponse';
import { login, logout, registration, checkAuth } from './authActions';
import { AuthState } from './types';

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: true,
  initialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.isAuth = true;
        state.isLoading = false;
        state.initialized = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.initialized = true;
      })
      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuth = false;
        state.initialized = true;
      })
      // REGISTRATION
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.isAuth = true;
        state.isLoading = false;
        state.initialized = true;
      })
      .addCase(registration.rejected, (state) => {
        state.isLoading = false;
        state.initialized = true;
      })
      // CHECK_AUTH
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.isAuth = true;
        state.isLoading = false;
        state.initialized = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuth = false;  
        state.isLoading = false;
        state.initialized = true;
      });
  },
});

export default authSlice.reducer;
