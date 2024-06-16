import { IUser } from './IUser';

interface userMember {
  id: string;
  name: string;
  surname: string;
  role: string;
  status: boolean;
}

export interface ICurrentChat {
  chatId: string;
  type: 'personal' | 'group';
  name: string;
  owner: {
    ownerId: string;
    name: string;
  };
  members: userMember[];
  isRead: boolean;
}

export interface IChatMessageItem {
  _id: string;
  sender: string;
  content: string;
  room: string;
  createdAt: Date;
  user: IUser;

  // userId: string;
  // type: "text" | "image" | "audio" | "video";
  // content: string;
  // date: string;
  // isRead: boolean;
}

// export interface IChatMessage {
//   user: IUser;
//   messages: IChatMessageItem[];
// }
