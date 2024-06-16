import { FC, useContext, useEffect, useState } from 'react';
import styles from './ChatMessage.module.scss';
import { IChatMessage } from '@/interfaces/IChat';
import AvatarBase from '@/components/UI/Avatar/AvatarBase/AvatarBase';
import MessageItem from '../MessageItem/MessageItem';
import { IUser } from '@/interfaces/IUser';
import { useParams } from 'react-router-dom';
import { SocketContext } from '@/main';

interface ChatMessageProps {
  chatMessage: IChatMessage;
  user: IUser;
}

const config = {
  avatarSize: 35,
};

const ChatMessage: FC<ChatMessageProps> = ({ chatMessage, user }) => {
  // const { isMine, messages, userAvatar } = chatMessage;
  const { isMine } = { isMine: true };
  const { firstName, lastName } = user;

  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const socket = useContext(SocketContext);
  const { roomId } = useParams<{ roomId: string }>();

  useEffect(() => {
    socket.emit('joinRoom', roomId);

    socket.on('chatMessage', (msg: IChatMessage) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.emit('leaveRoom', roomId);
      socket.off('chatMessage');
    };
  }, [roomId, socket]);

  return (
    <div className={`${styles['chat-message']} ${isMine ? styles._mine : ''}`}>
      <div className={styles['chat-message__container']}>
        <div className={styles['chat-message__avatar']}>
          {/* <AvatarBase imageTitle={`${firstName + ' ' + lastName}`} image={userAvatar} size={config.avatarSize} /> */}
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
