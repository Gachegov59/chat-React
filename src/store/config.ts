class AuthConfig {
  user = {
    login: 'auth/login',
    logout: 'auth/logout',
    registration: 'auth/registration',
    checkAuth: 'auth/checkAuth',
  };
  token = 'token';
}

class RoomConfig {
  room = {
    createRoom: 'room/createRoom',
    inviteUser: 'room/inviteUserToRoom',
    leaveRoom: 'room/leaveRoom',
    deleteRoom: 'room/deleteRoom',
    getRooms: 'room/getRoomsForUser',
  };
}

export const authConfig = new AuthConfig();
export const roomConfig = new RoomConfig();
