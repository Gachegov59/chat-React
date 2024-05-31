export interface IMenuChat {
  id: string;
  image: string;
  name: string;
  type: 'user' | 'group';
  counter: number;
  lastMessage: {
    text: string;
    date: string;
  };
}
