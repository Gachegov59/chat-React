// src/messages/messageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMessages } from './messageActions';
import { IMessage } from './types';

interface MessageState {
  messages: IMessage[];
  loading: boolean;
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action: PayloadAction<IMessage[]>) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch messages';
    });
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
