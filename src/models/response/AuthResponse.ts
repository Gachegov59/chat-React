import { UserAuth } from "@/models/UserAuth";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserAuth;
}
