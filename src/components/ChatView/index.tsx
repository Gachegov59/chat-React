import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import LoaderSpinner from '../UI/Loader/LoaderSpinner/LoaderSpinner';
import { currentChatAPI } from './chatMock';
import { ICurrentChat } from '../../interfaces/IChat';
import ChatViewPagination from './ChatViewPagination/ChatViewPagination';
import ChatInputPanel from './ChatInputPanel/ChatInputPanel';
import { useTranslation } from 'react-i18next';
import InviteModal from '../Modals/InviteModal/InviteModal';
import BtnBase from '../UI/Button/BtnBase/BtnBase';
import { IBtnColors } from '../UI/Button/BtnBase/IBtn';

const ChatView: FC = () => {
  const [loaded] = useState<boolean>(true);
  const [isShowInviteModal, setIsShowInvitetModal] = useState<boolean>(false);
  const [currentChat] = useState<ICurrentChat>(currentChatAPI);
  const [message, setMessage] = useState<string>('');
  const { i18n } = useTranslation();
  const clickChatBtn = () => {
    setMessage('');
  };

  const closeInviteModal = () => setIsShowInvitetModal(false);

  return (
    <div className={styles['chat-view']}>
      <div className={styles['chat-view__top']}>
        <div className={styles['chat-view__invite']}>
          <BtnBase btnText={i18n.t('ChatView.invite')} btnColor={IBtnColors.Blue} clickBtn={() => setIsShowInvitetModal(true)}/>
        </div>
      </div>
      <div className={`${styles['chat-view__content']} scroll`}>
        {!loaded && (
          <div className={styles['chat-view__loader']}>
            <LoaderSpinner size={100} />
          </div>
        )}
        {/* <ChatViewPagination currentChat={currentChat} /> */}
        <ChatViewPagination currentChat={null} />
      </div>
      <ChatInputPanel message={message} setMessage={setMessage} clickChatBtn={clickChatBtn} />
      <InviteModal chat={null} isShowInviteModal={isShowInviteModal} closeInviteModal={() => closeInviteModal()} />

    </div>
  );
};

export default ChatView;
