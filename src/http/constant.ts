type obejctString = {
  [key: string]: string;
};

class Endpoints {
  USER: obejctString = {
    USERS_BASE_ROUTE: '/user',
    REGISTRATION: '/registration',
    LOGIN: '/login',
    LOGOUT: '/logout',
    ACTIVATE_LINK: '/activate/:link',
    REFRESH: '/refresh',
    USERS: '/users',
  };
  ROOM: obejctString = {
    ROOM_BASE_ROUTE: '/api/room',
    CREATE: '/create',
    DELETE: '/delete',
    INVITE: '/invite',
    LEAVE: '/leave',
    GET_ROOMS: '/rooms',
  };
}

export default new Endpoints();
