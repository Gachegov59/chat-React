import axiosInstance from "../http";
import {AxiosResponse} from "axios";
import { UserAuth } from "../models/UserAuth";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<UserAuth[]>> {
        return axiosInstance.get<UserAuth[]>('user/users')
    }
}