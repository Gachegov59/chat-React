import { FC, useEffect, useState } from 'react';
import styles from './MenuChatItem.module.scss';
import AvatarChatBase from '@/components/UI/Avatar/AvatarBase/AvatarBase';
import dayjs from 'dayjs';
import { IRoom } from '@/interfaces/IMenu';
import { useAppDispatch } from '@/hooks/redux';
import { setActiveRoom } from '@/store/room/roomSlice';
interface MenuChatProps {
  chat: IRoom;
}

const getAvatarSize = (width: number): number => {
  if (width < 1200) return 35;
  return 50;
};

const MenuChatItem: FC<MenuChatProps> = ({ chat }) => {
  const [avatarSize, setAvatarSize] = useState<number>(getAvatarSize(window.innerWidth));
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleResize = () => {
      setAvatarSize(getAvatarSize(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleClick = () => {
    dispatch(setActiveRoom(chat));
  };

  return (
    <>
      <div key={chat._id} className={styles['menuChat-item']} onClick={handleClick}>
        <div className={styles['menuChat-item__avatar']}>
          {chat.image && <AvatarChatBase image={chat.image} size={avatarSize} imageTitle={chat.name} />}
          {chat.users.length < 2 ? (
            <AvatarChatBase image="avatar-default_1.png" size={avatarSize} imageTitle={chat.name} />
          ) : (
            <AvatarChatBase image="avatar-default_2.png" size={avatarSize} imageTitle={chat.name} />
          )}
        </div>
        <div className={styles['menuChat-item__container']}>
          <div className={styles['menuChat-item__top']}>
            <div className={styles['menuChat-item__name']}>{chat.name}</div>
            {chat.lastMessage && (
              <div className={styles['menuChat-item__date']}>{dayjs(chat.lastMessage.date).format('HH.MM')}</div>
            )}
          </div>
          <div className={styles['menuChat-item__content']}>
            {chat.lastMessage && <div className={styles['menuChat-item__text']}>{chat.lastMessage.text}</div>}
          </div>
          {/* {chat.counter && <div className={styles['menuChat-item__counter']}>{chat.counter}</div>} */}
        </div>
      </div>
    </>
  );
};

export default MenuChatItem;