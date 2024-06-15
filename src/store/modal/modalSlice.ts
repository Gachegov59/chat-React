import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isInviteModalOpen: boolean;
  isCreateChatOpen: boolean;
  isConfirmationModalOpen: boolean;
}

const initialState: ModalState = {
  isInviteModalOpen: false,
  isCreateChatOpen: false,
  isConfirmationModalOpen: false,
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
    openConfirmationModal: (state) => {
      state.isConfirmationModalOpen = true;
    },
    closeConfirmationModal: (state) => {
      state.isConfirmationModalOpen = false;
    },
  },
});

export const {
  openInviteModal,
  closeInviteModal,
  openCreateChatModal,
  closeCreateChatModal,
  openConfirmationModal,
  closeConfirmationModal,
} = modalSlice.actions;
export default modalSlice.reducer;
