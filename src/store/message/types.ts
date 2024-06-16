import { IUser } from "@/interfaces/IUser";

// src/models/Message.ts
export interface IMessage {
    _id: string;
    sender: string;
    content: string;
    room: string;
    createdAt: Date;
    user: IUser;
}
