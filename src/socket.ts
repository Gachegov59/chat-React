import React from 'react';
export const API_URL = import.meta.env.API_SOCKET;
import { io } from 'socket.io-client';

export const socket = io(API_URL);
export const SocketContext = React.createContext(socket);
