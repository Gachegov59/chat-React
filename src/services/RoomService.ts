import { Room } from '@/models/Room';
import axiosInstance from '../http';
import { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:5000/api/room';

export default class RoomService {
  static async createRoom(name: string, userId: string): Promise<AxiosResponse<Room>> {
    return axiosInstance.post(`${API_URL}/create`, { name, userId });
  }

  static async inviteUserToRoom(roomId: string, userId: string): Promise<AxiosResponse<Room>> {
    return axiosInstance.post(`${API_URL}/invite`, { roomId, userId });
  }

  static async leaveRoom(roomId: string, userId: string): Promise<AxiosResponse<Room>> {
    return axiosInstance.post(`${API_URL}/leave`, { roomId, userId });
  }

  static async deleteRoom(roomId: string, userId: string): Promise<AxiosResponse<{ roomId: string }>> {
    return axiosInstance.delete(`${API_URL}/delete`, { data: { roomId, userId } });
  }

  static async getRoomsForUser(userId: string): Promise<AxiosResponse<Room[]>> {
    return axiosInstance.get(`${API_URL}/rooms`, { params: { userId } });
  }
}
