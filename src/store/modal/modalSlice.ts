import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isInviteModalOpen: boolean;
  isCreateChatOpen: boolean;
}

const initialState: ModalState = {
  isInviteModalOpen: false,
  isCreateChatOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openInviteModal: (state) => {
      state.isInviteModalOpen = true;
    },
    closeInviteModal: (state) => {
      state.isInviteModalOpen = false;
    },
    openCreateChatModal: (state) => {
      state.isCreateChatOpen = true;
    },
    closeCreateChatModal: (state) => {
      state.isCreateChatOpen = false;
    },
  },
});

export const { openInviteModal, closeInviteModal, openCreateChatModal, closeCreateChatModal } = modalSlice.actions;
export default modalSlice.reducer;
