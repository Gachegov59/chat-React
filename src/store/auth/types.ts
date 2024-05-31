import { IUser } from "../../models/IUser";

//todo перенести в models?
export interface AuthState {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
}
export type RegistrationParams = { email: string; password: string };
export type LoginParams = { email: string; password: string };
