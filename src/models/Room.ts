interface LastMessage {
  text: string;
  date: string;
}
export interface Room {
  _id: string;
  name: string;
  users: string[];
  creator: string;
  createdAt: Date;
  image: string;
  type?: 'user' | 'group';
  counter?: number;
  lastMessage?: LastMessage;
  settings?: {
    allowGuests: boolean;
    _id: string;
  };
}

export interface CreateRoomParams {
  name: string;
  userId: string;
}
export interface CreateRoomResponse {
  room: Room;
}

export interface InviteUserParams {
  roomId: string;
  userId: string;
}

export interface RoomState {
  rooms: Room[];
  isLoading: boolean;
  error: string | null;
  activeRoom: null | Room;
}
