import { FC } from 'react';
import styles from './MenuChatItem.module.scss';
import AvatarChatBase from '@/components/UI/Avatar/AvatarBase/AvatarBase';
import dayjs from 'dayjs';
import { IMenuChat } from '@/interfaces/IMenu';
interface MenuChatProps {
  chat: IMenuChat;
}

const MenuChatItem: FC<MenuChatProps> = ({ chat }) => {
  return (
    <>
      <div key={chat.id} className={styles['menuChat-item']}>
        <div className={styles['menuChat-item__avatar']}>
          <AvatarChatBase image={chat.image} size={50} imageTitle={chat.name} />
        </div>
        <div className={styles['menuChat-item__container']}>
          <div className={styles['menuChat-item__top']}>
            <div className={styles['menuChat-item__name']}>{chat.name}</div>
            <div className={styles['menuChat-item__date']}>{dayjs(chat.lastMessage.date).format('HH.MM')}</div>
          </div>
          <div className={styles['menuChat-item__content']}>
            <div className={styles['menuChat-item__text']}>{chat.lastMessage.text}</div>
          </div>
          {chat.counter > 0 && <div className={styles['menuChat-item__counter']}>{chat.counter}</div>}
        </div>
      </div>
    </>
  );
};

export default MenuChatItem;
