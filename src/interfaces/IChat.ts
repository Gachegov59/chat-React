// import { IPagination } from "./IPagination";
import { IUser } from "./IUser";

interface userMember {
  id: string;
  name: string;
  surname: string;
  role: string;
  status: boolean;
}

// export interface currentChatMessagesPagination extends IPagination {
//   id: string;
// }
export interface ICurrentChat {
  chatId: string;
  type: "personal" | "group";
  name: string;
  owner: {
    ownerId: string;
    name: string;
  };
  members: userMember[];
  isRead: boolean;
}

export interface IChatMessageItem {
  id: string;
  userId: string;
  type: "text" | "image" | "audio" | "video";
  content: string;
  date: string;
  isRead: boolean;
}

export interface IChatMessage {
  user: IUser;
  messageId: string;
  userAvatar: string;
  isMine: boolean;
  date: string;
  messages: IChatMessageItem[];
}
