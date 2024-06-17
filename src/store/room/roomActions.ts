import { createAsyncThunk } from '@reduxjs/toolkit';
import RoomService from '@/services/RoomService';
import { CreateRoomParams, CreateRoomResponse, InviteUserParams } from '@/models/Room';
import { roomConfig } from '../config';

export const createRoom = createAsyncThunk<CreateRoomResponse, CreateRoomParams>(
  roomConfig.room.createRoom,
  async ({ name, userId }, { rejectWithValue }) => {
    try {
      const response = await RoomService.createRoom(name, userId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const inviteUserToRoom = createAsyncThunk(
  roomConfig.room.inviteUser,
  async ({ roomId, userId }: InviteUserParams, { rejectWithValue }) => {
    try {
      const response = await RoomService.inviteUserToRoom(roomId, userId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const leaveRoom = createAsyncThunk(
  roomConfig.room.leaveRoom,
  async ({ roomId, userId }: InviteUserParams, { rejectWithValue }) => {
    try {
      const response = await RoomService.leaveRoom(roomId, userId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteRoom = createAsyncThunk(
  roomConfig.room.deleteRoom,
  async ({ roomId, userId }: InviteUserParams, { rejectWithValue }) => {
    try {
      const response = await RoomService.deleteRoom(roomId, userId);
      return { roomId: response.data.roomId };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getRoomsForUser = createAsyncThunk(
  roomConfig.room.getRooms,
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await RoomService.getRoomsForUser(userId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
