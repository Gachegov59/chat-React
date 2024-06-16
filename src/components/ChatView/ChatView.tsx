import { FC, useContext, useEffect, useState } from 'react';
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
            <div className={styles['chat-view__controls']}>
              {user?.id === activeRoom.creator && (
                <>
                  <BtnBase
                    btnText={i18n.t('ChatView.invite')}
                    btnColor={IBtnColors.Blue}
                    className="mx-1 bg-gray-800 outline outline-1 outline-teal-50"
                    clickBtn={() => setIsShowInvitetModal(true)}
                  />
                  <BtnBase
                    btnText={i18n.t('ChatView.delete')}
                    className=" mx-1 bg-rose-950 outline outline-1 outline-teal-50"
                    btnColor={IBtnColors.Blue}
                    clickBtn={handleOpenConfirmationModal}
                  />
                </>
              )}

              <BtnBase
                btnText={i18n.t('ChatView.leave')}
                className="mx-1 bg-gray-800 outline outline-1 outline-teal-50"
                btnColor={IBtnColors.Blue}
                clickBtn={() => setIsShowInvitetModal(true)}
              />
            </div>
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
      <ChatInputPanel  clickChatBtn={() => {}} />
      <InviteModal chat={null} isShowInviteModal={isShowInviteModal} closeInviteModal={() => closeInviteModal()} />
    </div>
  );
};

export default ChatView;
