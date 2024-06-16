// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import roomReducer from './room/roomSlice';
import messageReducer from './message/messageSlice'
import modalReducer from './modal/modalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    messages: messageReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
