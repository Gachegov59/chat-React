import { UserAuth, Users } from "@/models/Auth";
import axiosInstance from "../http";
import {AxiosResponse} from "axios";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<Users[]>> {
        return axiosInstance.get<Users[]>('user/users')
    }
}