import { FC } from 'react';
import DefaultLayout from '../pages/layouts/DefaultLayout';
import ChatView from '../components/ChatView';
import MenuBase from '../components/Menu/MenuBase/MenuBase';
import { menuChats } from '../components/Menu/MenuBase/menuChatsMock';
const PageChat: FC = () => {
  return (
    <DefaultLayout>
      <MenuBase menuChats={menuChats}></MenuBase>
      <ChatView  />
    </DefaultLayout>
  );
};

export default PageChat;
