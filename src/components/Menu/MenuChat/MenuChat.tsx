import { FC } from 'react';
import { IRoom } from '../../../interfaces/IMenu';
import MenuChatItem from './MenuChatItem';
import styles from './MenuChat.module.scss';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { t } from 'i18next';
import { useAppDispatch } from '@/hooks/redux';
import { openCreateChatModal } from '@/store/modal/modalSlice';
interface MenuChatProps {
  menuChats: IRoom[] | null;
}

const MenuChat: FC<MenuChatProps> = ({ menuChats}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {(menuChats) ? (
        <>
          {menuChats?.map((chat) => (
            <MenuChatItem key={chat._id} chat={chat} />
          ))}
        </>
      ) : (
        <div className={styles['chat-placeholder']}>
          <Title size={TitleSize.H1} className="text-base sm:text-xl lg:text-2xl p-0 lg:p-4">
            <span className="text-light-blue">{t('ChatMenu.chat-placeholder')}</span>
          </Title>
          <BtnBase
            className="text-xs lg:text-lg p-1 lg:p-4"
            btnText={t('ChatView.create-room')}
            btnColor={IBtnColors.Blue}
            clickBtn={() => {dispatch(openCreateChatModal())}}
          />
        </div>
      )}
    </>
  );
};

export default MenuChat;
