import { FC } from 'react';
import ChatLayout from './layouts/ChatLayout';
import ChatView from '../components/ChatView';
import MenuBase from '../components/Menu/MenuBase/MenuBase';
import { menuChats } from '../components/Menu/MenuBase/menuChatsMock';
const PageAuth: FC = () => {
  return (
    <ChatLayout>
      <MenuBase menuChats={menuChats}></MenuBase>
      <ChatView  />
    </ChatLayout>
  );
};

export default PageAuth;
