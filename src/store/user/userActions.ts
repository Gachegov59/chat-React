// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { LoginParams, RegistrationParams } from './types';
// import AuthService from '../../services/AuthService';
// import { AxiosError } from 'axios';
// import { errorMessage, message, messageError, successMessage } from '@/utils/showMessage';


// export const login = createAsyncThunk('user/getUserSettings', async ({ email, password }: LoginParams, { rejectWithValue }) => {
//   try {
//     const response = await AuthService.login(email, password);
//     // localStorage.setItem('token', response.data.accessToken);

//     // successMessage(JSON.stringify(response.data));
//     return response.data;
//   } catch (error: unknown) {
//     errorMessage(error as AxiosError);
//     return rejectWithValue((error as AxiosError).response?.data);
//   }
// });
