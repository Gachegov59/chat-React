
export interface UserAuth {
  email: string;
  isActivated: boolean;
  id: string;
  firstName: string;
  lastName: string;
}

export interface Users {
  _id: string;
  firstName: string;
  lastName: string;
}


export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserAuth;
  message?: string;
}
