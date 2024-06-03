import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { login, logout, registration, checkAuth } from "./authActions";
import { AuthResponse } from "@/models/response/AuthResponse";

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
};

const authSuccess = (state: AuthState, action: PayloadAction<AuthResponse>) => {
  state.user = action.payload.user;
  state.isAuth = true;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, authSuccess)
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
      .addCase(registration.fulfilled, authSuccess)
      .addCase(registration.rejected, (state) => {
        state.isLoading = false;
      })
      // CHECK_AUTH
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        checkAuth.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.user = action.payload.user;
          state.isAuth = true;
          state.isLoading = false;
        }
      )
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
      });
    // .addCase(checkAuth.finally)
  },
});

export default authSlice.reducer;
