import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logout, registration, checkAuth } from './authActions';
import { AuthState } from './types';
import { AuthResponse } from '@/models/Auth';

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
  initialState: false
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
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuth = false;
      })

      // REGISTRATION
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(registration.rejected, (state) => {
        state.isLoading = false;
      })
      
      // CHECK_AUTH
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.user = action.payload.user;
        state.isAuth = true;
        state.isLoading = false;
        state.initialState = true
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuth = false;  
        state.isLoading = false;
        state.initialState = true
      });
  },
});

export default authSlice.reducer;
