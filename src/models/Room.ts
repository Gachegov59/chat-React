export interface Room {
  _id: string;
  name: string;
  users: string[];
  creator: string;
  settings: {
    allowGuests: boolean;
    _id: string;
  };
}

export interface CreateRoomParams {
  name: string;
  userId: string;
}

export interface InviteUserParams {
  roomId: string;
  userId: string;
}

export interface RoomState {
  rooms: Room[];
  isLoading: boolean;
  error: string | null;
}
