import { UserAuth } from '../../models/UserAuth';

export interface AuthState {
  user: UserAuth | null;
  isAuth: boolean;
  isLoading: boolean;
  initialState: boolean;
  // initialState: { user: UserAuth | null; token: string | null };
}
export type RegistrationParams = { email: string; password: string; firstName: string; lastName: string };
export type LoginParams = { email: string; password: string };
