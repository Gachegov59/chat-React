import { FC } from 'react';
import styles from './MessageItem.module.scss';
import dayjs from 'dayjs';
import { IChatMessageItem } from '@/interfaces/IChat';

interface MessageItemProps {
  chatMessage: IChatMessageItem;
  isMine: boolean;
}

const MessageItem: FC<MessageItemProps> = ({ chatMessage, isMine }) => {
  return (
    <div className={`${styles['message-item']} ${isMine ? styles._mine : ''}`}>
      <div className={styles['message-item__container']}>
        <div className={styles['message-item__text']}>{chatMessage.content}</div>
        <div className={styles['message-item__date']}>{dayjs(chatMessage.date).format('HH.MM')}</div>
      </div>
    </div>
  );
};

export default MessageItem;
