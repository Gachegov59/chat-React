type obejctString = {
  [key: string]: string;
};

class Endpoints {
  USER: obejctString = {
    USERS_BASE_ROUTE: "/user",
    REGISTRATION: "/registration",
    LOGIN: "/login",
    LOGOUT: "/logout",
    ACTIVATE_LINK: "/activate/:link",
    REFRESH: "/refresh",
    USERS: "/users",
  };
}

export default new Endpoints();
