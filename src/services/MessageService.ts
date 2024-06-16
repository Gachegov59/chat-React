// src/services/MessageService.ts
import { IChatMessageItem } from '@/interfaces/IChat';
import axiosInstance from '../http';
import { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:5000/api/messages';

export default class MessageService {
  static async fetchMessages(roomId: string): Promise<AxiosResponse<IChatMessageItem[]>> {
    return axiosInstance.get(`${API_URL}/${roomId}`);
  }
}
