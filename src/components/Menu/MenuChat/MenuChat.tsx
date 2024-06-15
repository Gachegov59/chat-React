import { FC, useEffect } from 'react';
import { IRoom } from '../../../interfaces/IMenu';
import MenuChatItem from './MenuChatItem';
import styles from './MenuChat.module.scss';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openCreateChatModal } from '@/store/modal/modalSlice';
import LoaderSpinner from '@/components/UI/Loader/LoaderSpinner/LoaderSpinner';
import ErrorBoundary from './ErrorBoundary';
interface MenuChatProps {
  menuChats: IRoom[] | null;
}

const ChatPlaceholder: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles['chat-placeholder']}>
      <Title size={TitleSize.H1} className="text-base sm:text-xl lg:text-2xl p-0 lg:p-4">
        <span className="text-light-blue">{t('ChatMenu.chat-placeholder')}</span>
      </Title>
      <BtnBase
        className="text-xs lg:text-lg p-1 lg:p-4"
        btnText={t('ChatView.create-room')}
        btnColor={IBtnColors.Blue}
        clickBtn={() => {
          dispatch(openCreateChatModal());
        }}
      />
    </div>
  );
};
const MenuChat: FC<MenuChatProps> = ({ menuChats }) => {
  console.log('MenuChats:', menuChats);
  return (
    <ErrorBoundary>
      {menuChats && menuChats.length > 0 ? (
        menuChats.map((menuChat, index) => (
          <div key={index}>
            <MenuChatItem menuChat={menuChat} />
          </div>
        ))
      ) : (
        <ChatPlaceholder />
      )}
    </ErrorBoundary>
  );
};

export default MenuChat;
