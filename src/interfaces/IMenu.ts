interface LastMessage {
  text: string;
  date: string;
}
interface RoomSettings {
  allowGuests: boolean;
}
export interface IRoom {
  _id: string;
  name: string;
  users: string[];
  creator: string;
  settings?: RoomSettings;
  createdAt: Date;
  image: string;
  type?: 'user' | 'group';
  counter?: number;
  lastMessage?: LastMessage;
}
