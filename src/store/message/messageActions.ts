// src/messages/messageActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import MessageService from '@/services/MessageService';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async (roomId: string, { rejectWithValue }) => {
  try {
    const response = await MessageService.fetchMessages(roomId);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    return rejectWithValue('Failed to fetch messages');
  }
});
