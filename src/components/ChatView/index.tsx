import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import LoaderSpinner from '../UI/Loader/LoaderSpinner/LoaderSpinner';
import { currentChatAPI } from './chatMock';
import { ICurrentChat } from '../../interfaces/IChat';
import ChatViewPagination from './ChatViewPagination/ChatViewPagination';
import ChatInputPanel from './ChatInputPanel/ChatInputPanel';
import { useTranslation } from 'react-i18next';

const ChatView: FC = () => {
  const [loaded] = useState<boolean>(true);
  const [currentChat] = useState<ICurrentChat>(currentChatAPI);
  const [message, setMessage] = useState<string>('');
  const { i18n } = useTranslation();
  const clickChatBtn = () => {
    setMessage('');
  };

  //todo: chek for chenge on hebrew! / it has bag with layout scss..
  // useEffect(() => {
  //   document.documentElement.dir = 'ltr';
  // }, []);

  return (
    <div className={styles['chat-view']}>
      <div className={styles['chat-view__top']}></div>
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
    </div>
  );
};

export default ChatView;
