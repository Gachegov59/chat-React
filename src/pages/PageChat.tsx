import { FC } from 'react';
import ChatLayout from './layouts/ChatLayout';
import ChatView from '../components/ChatView/ChatView';
import MenuBase from '../components/Menu/MenuBase/MenuBase';
const PageAuth: FC = () => {
  return (
    <ChatLayout>
      <MenuBase />
      <ChatView />
    </ChatLayout>
  );
};

export default PageAuth;
