import { FC, useState } from 'react';
import styles from './ChatView.module.scss';
import LoaderSpinner from '../UI/Loader/LoaderSpinner/LoaderSpinner';
import ChatViewPagination from './ChatViewPagination/ChatViewPagination';
import ChatInputPanel from './ChatInputPanel/ChatInputPanel';
import { useTranslation } from 'react-i18next';
import InviteModal from '../Modals/InviteModal/InviteModal';
import BtnBase from '../UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '../UI/Button/BtnBase/IBtn';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openConfirmationModal } from '@/store/modal/modalSlice';
import ChatControls from './ChatControls/ChatControls';

const ChatView: FC = () => {
  const [loaded] = useState<boolean>(true);
  const [isShowInviteModal, setIsShowInvitetModal] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const { activeRoom } = useAppSelector((state) => state.room);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const closeInviteModal = () => setIsShowInvitetModal(false);
  const handleOpenConfirmationModal = () => {
    dispatch(openConfirmationModal());
  };
  return (
    <div className={styles['chat-view']}>
      <div className={styles['chat-view__top']}>
        {activeRoom && (
          <>
            <div className={styles['chat-view__top']}>{activeRoom.name}</div>
            <ChatControls setIsShowInviteModal={setIsShowInvitetModal} />
          </>
        )}
      </div>
      <div className={`${styles['chat-view__content']} scroll`}>
        {!loaded && (
          <div className={styles['chat-view__loader']}>
            <LoaderSpinner size={100} />
          </div>
        )}
        <ChatViewPagination currentChat={activeRoom} />
      </div>
      <ChatInputPanel clickChatBtn={() => {}} />
      <InviteModal chat={null} isShowInviteModal={isShowInviteModal} closeInviteModal={() => closeInviteModal()} />
    </div>
  );
};

export default ChatView;
