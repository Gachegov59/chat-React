import { Room, RoomState } from '@/models/Room';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createRoom, deleteRoom, getRoomsForUser, inviteUserToRoom, leaveRoom } from './roomActions';

const initialState: RoomState = {
  rooms: [],
  isLoading: false,
  error: null,
  activeRoom: null,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setActiveRoom: (state, action: PayloadAction<Room>) => {
      state.activeRoom = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // createRoom
      .addCase(createRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRoom.fulfilled, (state, action: PayloadAction<Room>) => {
        state.rooms.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createRoom.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // inviteUserToRoom
      .addCase(inviteUserToRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(inviteUserToRoom.fulfilled, (state, action: PayloadAction<Room>) => {
        const index = state.rooms.findIndex((room) => room._id === action.payload._id);
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(inviteUserToRoom.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // leaveRoom
      .addCase(leaveRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(leaveRoom.fulfilled, (state, action: PayloadAction<Room>) => {
        const index = state.rooms.findIndex((room) => room._id === action.payload._id);
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(leaveRoom.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // deleteRoom
      .addCase(deleteRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRoom.fulfilled, (state, action: PayloadAction<{ roomId: string }>) => {
        state.rooms = state.rooms.filter((room) => room._id !== action.payload.roomId);
        state.isLoading = false;
      })
      .addCase(deleteRoom.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // getRoomsForUser
      .addCase(getRoomsForUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoomsForUser.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.rooms = action.payload;
        state.isLoading = false;
      })
      .addCase(getRoomsForUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setActiveRoom } = roomSlice.actions;
export default roomSlice.reducer;
