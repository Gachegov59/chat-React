import { FC, useContext, useEffect, useState } from 'react';
import styles from './ChatMessage.module.scss';
import { IChatMessageItem } from '@/interfaces/IChat';
import MessageItem from '../MessageItem/MessageItem';
import { useParams } from 'react-router-dom';
import { SocketContext } from '@/main';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import LoaderSpinner from '@/components/UI/Loader/LoaderSpinner/LoaderSpinner';
import { IUser } from '@/interfaces/IUser';

interface ChatMessageProps {
  chatMessage: IChatMessageItem;
  user: IUser;
}

const ChatMessage: FC<ChatMessageProps> = () => {
  const { isMine } = { isMine: true }; // <fix
  const { isLoading } = useAppSelector((state) => state.room);
  const [messages, setMessages] = useState<IChatMessageItem[]>([]);
  const socket = useContext(SocketContext);
  const { roomId } = useParams<{ roomId: string }>();
  const dispatch = useAppDispatch();
  const { activeRoom } = useAppSelector((state) => state.room);

  console.log('🚀 ~ activeRoom:---', activeRoom);
 
  useEffect(() => {
    if (activeRoom) {
      // dispatch(fetchMessages(activeRoom._id));
      // console.log('fetchMessages----', roomId);
      // socket.emit('joinRoom', roomId);
    }

    socket.on('chatMessage', (msg: IChatMessageItem) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      if (roomId) {
        socket.emit('leaveRoom', roomId);
      }
      socket.off('chatMessage');
    };
  }, [dispatch, roomId, socket]);

  if (isLoading) {
    return (
      <div>
        <LoaderSpinner size={100} />
      </div>
    );
  }
  return (
    <div className={`${styles['chat-message']} ${isMine ? styles._mine : ''}`}>
      <div className={styles['chat-message__container']}>
        <div className={styles['chat-message__avatar']}>
          {/* <AvatarBase imageTitle={`${firstName + ' ' + lastName}`} image={userAvatar} size={config.avatarSize} /> */}
        </div>
        <div className={styles['chat-message__items']}>
          {messages.map((message, index) => (
            <MessageItem key={index} chatMessage={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
