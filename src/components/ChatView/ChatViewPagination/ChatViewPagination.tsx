import { FC } from 'react';
import styles from './ChatViewPagination.module.scss';
import ChatMessage from '../ChatMessage/ChatMessage';
import { ICurrentChat } from '@/interfaces/IChat';
import { chatMessagesAPI } from './chatMessagesAPIMock';

interface ChatViewPaginationProps {
  currentChat: ICurrentChat;
  // total: number;
  // page: number;
  // changePage: (page: number) => void;
}

const ChatViewPagination: FC<ChatViewPaginationProps> = () => {
  return (
    <div className={styles['chat-view-pagination']}>
      {chatMessagesAPI.map((message) => (
        <ChatMessage key={message.messageId} chatMessage={message} user={message.user} />
      ))}
    </div>
  );
};

export default ChatViewPagination;
