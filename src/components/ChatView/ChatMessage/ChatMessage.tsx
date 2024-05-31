import { FC } from 'react';
import styles from './ChatMessage.module.scss';
import { IChatMessage } from '@/interfaces/IChat';
import AvatarBase from '@/components/UI/Avatar/AvatarBase/AvatarBase';
import MessageItem from '../MessageItem/MessageItem';
import { IUser } from '@/interfaces/IUser';

interface ChatMessageProps {
  chatMessage: IChatMessage;
  user: IUser;
}

const config = {
  avatarSize: 35,
};

const ChatMessage: FC<ChatMessageProps> = ({ chatMessage, user }) => {
  const { isMine, messages, userAvatar } = chatMessage;
  const { name } = user;

  return (
    <div className={`${styles['chat-message']} ${isMine ? styles._mine : ''}`}>
      <div className={styles['chat-message__container']}>
        <div className={styles['chat-message__avatar']}>
          <AvatarBase imageTitle={name} image={userAvatar} size={config.avatarSize} />
        </div>
        <div className={styles['chat-message__items']}>
          {messages.map((message, index) => (
            <MessageItem key={index} chatMessage={message} isMine={isMine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
