import { FC } from 'react';
import styles from './MessageItem.module.scss';
import dayjs from 'dayjs';
import { IChatMessageItem } from '@/interfaces/IChat';
import { useAppSelector } from '@/hooks/redux';

interface MessageItemProps {
  chatMessage: IChatMessageItem;
}

const MessageItem: FC<MessageItemProps> = ({ chatMessage}) => {
  const { user } = useAppSelector((state) => state.auth);
  const isMine = chatMessage._id === user?.id;
  return (
    <div className={`${styles['message-item']} ${isMine ? styles._mine : ''}`}>
      <div className={styles['message-item__container']}>
        <div className={styles['message-item__text']}>{chatMessage.content}</div>
        <div className={styles['message-item__date']}>{dayjs(chatMessage.createdAt).format('HH.MM')}</div>
      </div>
    </div>
  );
};

export default MessageItem;
